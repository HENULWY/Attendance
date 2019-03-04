package com.ylw.controller;

import com.ylw.model.User;
import com.ylw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.support.SessionStatus;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Controller
@RequestMapping("/user")
@Scope("prototype")
public class UserController {
    @Autowired
    UserService userService;
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


    @RequestMapping("/login")
    public @ResponseBody
    String login(User user, HttpServletRequest request) {
        User resultUser = userService.login(user);
        if (resultUser != null) {
            request.getSession().setAttribute("user", resultUser);
            return "viewframe.jsp";
        } else {
            return "error";
        }

    }

    @RequestMapping("/register")
    public @ResponseBody
    String register(User user, HttpServletRequest request) {
        if (userService.register(user)) {
            return "success";
        } else {
            return "error";
        }

    }


    @RequestMapping("/weChatLogin")
    public @ResponseBody
    String weChatLogin(User user, HttpServletRequest request) {
        String resultString = userService.weChatLogin(user);

        return resultString;
    }


    @RequestMapping("/getOpenId")
    public @ResponseBody
    Map getOpenId(String js_code, HttpServletRequest request) {
        Map resultMap = userService.getOpenId(js_code);
        return resultMap;
    }

    @RequestMapping("/logout")
    public String logout(@ModelAttribute("user") User user, SessionStatus sessionStatus) {
        sessionStatus.setComplete();
        return "index";
    }

    @RequestMapping("/welcome")
    public String welcome() {
        return "welcome";
    }

    @RequestMapping("/edit")
    public String edit(Model model, HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");

        model.addAttribute("user", user);

        return "userInformation";
    }

    @RequestMapping("/correct")
    public String correct(User user, Model model, HttpServletRequest request) {

        User sessionUser = (User) request.getSession().getAttribute("user");

        if (sessionUser.getUserAccount().equals(user.getUserAccount())) {
            user.setUserID(sessionUser.getUserID());
            user.setUserWechat(sessionUser.getUserWechat());
            if (user.getUserID() != null && user.getUserAccount() != null && user.getUserPassword() != null) {
                if (userService.updateUser(user) == 1) {
                    model.addAttribute("user", user);
                    request.getSession().setAttribute("user", user);
                    return "userInformation";
                }
            }

        }
        model.addAttribute("user", sessionUser);
//        System.out.println("dao da zhe li");
        return "userInformation";
    }


}
