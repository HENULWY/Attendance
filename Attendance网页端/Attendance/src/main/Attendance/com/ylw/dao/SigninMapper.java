package com.ylw.dao;

import com.ylw.model.Signin;
import com.ylw.model.SigninExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SigninMapper {
    int countByExample(SigninExample example);

    int deleteByExample(SigninExample example);

    int deleteByPrimaryKey(Integer signInID);

    int insert(Signin record);

    int insertSelective(Signin record);

    List<Signin> selectByExample(SigninExample example);

    Signin selectByPrimaryKey(Integer signInID);

    int updateByExampleSelective(@Param("record") Signin record, @Param("example") SigninExample example);

    int updateByExample(@Param("record") Signin record, @Param("example") SigninExample example);

    int updateByPrimaryKeySelective(Signin record);

    int updateByPrimaryKey(Signin record);
}