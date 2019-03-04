package com.ylw.service;

import com.ylw.bean.PagedResult;
import com.ylw.model.Signin;

import java.util.Date;
import java.util.List;

public interface SignInService {

    public boolean insertSignIn(Signin signin);
    public List<Signin> selectSignIn(int userID, int pageIndex);
    public PagedResult<Signin> queryByPage(String userName, Integer pageNo, Integer pageSize);
    public PagedResult<Signin> searchSignIn(Integer pageNo, Integer pageSize, Integer userID, Date signInDate);
}
