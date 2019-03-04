package com.ylw.service;

import com.ylw.model.User;
import java.util.Map;

public interface UserService {
    public User login(User user);
    public boolean register(User user);
    public String weChatLogin(User user);
    public Map getOpenId(String js_code);
    public User getUserByOpenId(User user);
    public int updateUser(User user);
    public User getUserByUserName(String userName);
}
