package com.ylw.controller;


import com.ylw.bean.OutSignIn;
import com.ylw.bean.PagedResult;
import com.ylw.dao.AttendanceMapper;
import com.ylw.model.Signin;
import com.ylw.model.User;
import com.ylw.service.AttendanceService;
import com.ylw.service.SignInService;
import com.ylw.service.UserService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/signin")
@Scope("prototype")
public class SignInController {

    @Autowired
    SignInService signInService;

    @Autowired
    UserService userService;

    @Autowired
    AttendanceService attendanceService;

    /**
     * form表单提交 Date类型数据绑定
     * <功能详细描述>
     *
     * @param binder
     * @see [类、类#方法、类#成员]
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }

    @RequestMapping("/insertSignIn")
    public @ResponseBody
    String insertSignIn(User user, Signin signin, HttpServletRequest request) {
        User resultUser = userService.getUserByOpenId(user);
        if (resultUser != null) {
            signin.setUserID(resultUser.getUserID());
            signin.setSignInDate(new Date());
            if (signInService.insertSignIn(signin)) {
                attendanceService.updateAttendance(signin.getUserID(), signin.getSignInDate(), signin.getSignInAddress());
                return "success";
            }
        }
        return "error";
    }


    @RequestMapping("/selectSignIn")
    public @ResponseBody
    Map<String, Object> selectSignIn(User user,Object body, String pageIndex, HttpServletRequest request) {
//        System.out.println(user.getUserWechat()+pageIndex+request.getParameter("pageIndex"));
        User resultUser = userService.getUserByOpenId(user);
        if (resultUser != null) {
            List<Signin> signinList = signInService.selectSignIn(resultUser.getUserID(), Integer.parseInt(pageIndex));

            if (signinList.size() != 0) {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                Map<String, Object> signMap = new HashMap<String, Object>();
                List<OutSignIn> outSignInList = new ArrayList<>();

                for (Signin item : signinList) {
                    OutSignIn outSignIn = new OutSignIn();

                    outSignIn.setSignInID(item.getSignInID());
                    outSignIn.setName(resultUser.getUserName());
                    outSignIn.setDate(sdf.format(item.getSignInDate()));
                    outSignIn.setAddress(item.getSignInAddress());

                    outSignInList.add(outSignIn);
                }
                signMap.put("code", 0);
                signMap.put("message", "连接成功");
                signMap.put("data", outSignInList);
                return signMap;
            }
        }
        return null;
    }

    @RequestMapping(value = "/tables", method = RequestMethod.POST)
    public @ResponseBody
    PagedResult<Signin> tables(Integer pageNumber, Integer pageSize, String userName, HttpServletRequest request) {

        User user = (User) request.getSession().getAttribute("user");

        PagedResult<Signin> pageResult = signInService.queryByPage(userName, pageNumber, pageSize);
        return pageResult;
    }


    @RequestMapping(value = "/searchSignin", method = RequestMethod.POST)
    public @ResponseBody
    PagedResult<Signin> searchSignin(Integer pageNumber, Integer pageSize, String signInName, Date signInDate, HttpServletRequest request) {
        Integer userID = null;
        if(signInName!=null){
            User user = userService.getUserByUserName(signInName);
            if(user!=null){
                userID = user.getUserID();
            }
        }else{
            userID = ((User)request.getSession().getAttribute("user")).getUserID();
        }
        PagedResult<Signin> pageResult = signInService.searchSignIn(pageNumber, pageSize, userID, signInDate);
        return pageResult;
    }
}
