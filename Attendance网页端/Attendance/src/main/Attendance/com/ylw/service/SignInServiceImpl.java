package com.ylw.service;

import com.github.pagehelper.PageHelper;
import com.ylw.bean.OutSignIn;
import com.ylw.bean.PagedResult;
import com.ylw.dao.SigninMapper;
import com.ylw.model.Signin;
import com.ylw.model.SigninExample;
import com.ylw.util.BeanUtil;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("SignInService")
public class SignInServiceImpl implements SignInService{

    @Autowired
    SigninMapper signinMapper;

    @Override
    public boolean insertSignIn(Signin signin) {
        if(signin.getUserID()!=null&&signin.getSignInAddress()!=null){
            signinMapper.insert(signin);
            return true;
        }

        return false;
    }

    @Override
    public List<Signin> selectSignIn(int userID, int pageIndex) {
        if(userID!=0){
            SigninExample signinExample = new SigninExample();
            signinExample.createCriteria().andUserIDEqualTo(userID);
            signinExample.setStart(0+10*(pageIndex-1));
            signinExample.setLimit(10);
            signinExample.setOrderByClause("signInDate ASC");

            List<Signin> signinList = signinMapper.selectByExample(signinExample);

            return signinList;
        }
        return null;
    }

    @Override
    public PagedResult<Signin> queryByPage(String userName, Integer pageNo, Integer pageSize) {
        pageNo = pageNo == null?1:pageNo;
        pageSize = pageSize == null?10:pageSize;
        PageHelper.startPage(pageNo,pageSize);  //startPage是告诉拦截器说我要开始分页了。分页参数是这两个。

        SigninExample signinExample = new SigninExample();
        signinExample.setOrderByClause("signInDate ASC");
        return BeanUtil.toPagedResult(signinMapper.selectByExample(signinExample));
    }

    @Override
    public PagedResult<Signin> searchSignIn(Integer pageNo, Integer pageSize, Integer userID, Date signInDate) {
        pageNo = pageNo == null?1:pageNo;
        pageSize = pageSize == null?10:pageSize;
        PageHelper.startPage(pageNo,pageSize);  //startPage是告诉拦截器说我要开始分页了。分页参数是这两个。


        SigninExample signinExample = new SigninExample();
        SigninExample.Criteria criteria = signinExample.createCriteria();
        if(userID!=null){
            criteria.andUserIDEqualTo(userID);
        }
        if(signInDate!=null){
            Calendar c = Calendar.getInstance();
            c.setTime(signInDate);
            c.add(Calendar.DAY_OF_MONTH, 1);
            criteria.andSignInDateBetween(signInDate, c.getTime());
        }
        List<Signin> signinList = signinMapper.selectByExample(signinExample);

        if (signinList.size()==0){
            return null;
        }else{
            return BeanUtil.toPagedResult(signinList);
        }
    }
}
