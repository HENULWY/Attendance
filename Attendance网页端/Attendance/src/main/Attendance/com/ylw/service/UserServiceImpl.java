package com.ylw.service;

import com.ylw.dao.UserMapper;
import com.ylw.model.User;
import com.ylw.model.UserExample;
import com.ylw.util.HttpUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import static com.ylw.keys.WeixinKeys.APPID;
import static com.ylw.keys.WeixinKeys.APPSECRET;
import static com.ylw.keys.WeixinKeys.USER_URL;

@Service("UserService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public User login(User user) {
        if(!user.getUserAccount().isEmpty()&&!user.getUserPassword().isEmpty()){
            User resultUser = userMapper.selectLoginUser(user.getUserAccount(), user.getUserPassword());
            if(resultUser!=null&&resultUser.getUserID()!=null){
                return resultUser;
            }
        }
        return null;
    }

    @Override
    public boolean register(User user) {
        if(!user.getUserAccount().isEmpty()&&!user.getUserPhone().isEmpty()){
            if(userMapper.selectCheckUser(user.getUserAccount(), user.getUserPhone())==0){
                userMapper.insert(user);
                return true;
            }
        }
        return false;
    }

    @Override
    public String weChatLogin(User user) {
        if(!user.getUserAccount().isEmpty()&&!user.getUserPassword().isEmpty()&&!user.getUserWechat().isEmpty()){
            User resultUser = userMapper.selectLoginUser(user.getUserAccount(), user.getUserPassword());
            if(resultUser!=null&&resultUser.getUserID()!=null){
                if(resultUser.getUserWechat()==null){
                    resultUser.setUserWechat(user.getUserWechat());
                    userMapper.updateByPrimaryKey(resultUser);
                }else {
                    if(resultUser.getUserWechat().isEmpty()){
                        resultUser.setUserWechat(user.getUserWechat());
                        userMapper.updateByPrimaryKey(resultUser);
                    }else{
                        return "error";
                    }
                }
                return "success";
            }else{
                return "unRegister";
            }
        }else{
            return "error";
        }
    }

    @Override
    public Map getOpenId(String js_code) {
        String requestUrl = USER_URL.replace("APPID",APPID).replace("SECRET",APPSECRET).replace("JSCODE",js_code);
        HttpUtil httpUtil = new HttpUtil();
        JSONObject jsonObject = JSONObject.fromObject(httpUtil.httpStringRequest(requestUrl));

        return jsonObject;
    }

    @Override
    public User getUserByOpenId(User user) {
        if(user.getUserWechat()!=null){
            UserExample userExample = new UserExample();
            userExample.createCriteria().andUserWechatEqualTo(user.getUserWechat());
            List<User> userList = userMapper.selectByExample(userExample);
            if(userList!=null&&userList.size()>=0){
                return userList.get(0);
            }
        }

        return null;
    }

    @Override
    public int updateUser(User user) {
        int result = userMapper.updateByPrimaryKey(user);
        return result;
    }

    @Override
    public User getUserByUserName(String userName) {
        if(userName!=null){
            if(!userName.isEmpty()){
                UserExample userExample = new UserExample();
                userExample.createCriteria().andUserNameEqualTo(userName);
                List<User> userList = userMapper.selectByExample(userExample);
                if(userList!=null){
                    if(userList.size()>0){
                        return userList.get(0);
                    }
                }
            }
        }
        return null;
    }
}
