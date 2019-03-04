package com.ylw.model;

import java.util.Date;

public class User {
    private Integer userID;

    private String userAccount;

    private String userPassword;

    private String companyID;

    private String userPhone;

    private String userName;

    private Date userBirthDay;

    private String userDepartment;

    private Integer userPower;

    private String userWechat;

    public User(Integer userID, String userAccount, String userPassword, String companyID, String userPhone, String userName, Date userBirthDay, String userDepartment, Integer userPower, String userWechat) {
        this.userID = userID;
        this.userAccount = userAccount;
        this.userPassword = userPassword;
        this.companyID = companyID;
        this.userPhone = userPhone;
        this.userName = userName;
        this.userBirthDay = userBirthDay;
        this.userDepartment = userDepartment;
        this.userPower = userPower;
        this.userWechat = userWechat;
    }

    public User() {
        super();
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(String userAccount) {
        this.userAccount = userAccount == null ? null : userAccount.trim();
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword == null ? null : userPassword.trim();
    }

    public String getCompanyID() {
        return companyID;
    }

    public void setCompanyID(String companyID) {
        this.companyID = companyID == null ? null : companyID.trim();
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone == null ? null : userPhone.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public Date getUserBirthDay() {
        return userBirthDay;
    }

    public void setUserBirthDay(Date userBirthDay) {
        this.userBirthDay = userBirthDay;
    }

    public String getUserDepartment() {
        return userDepartment;
    }

    public void setUserDepartment(String userDepartment) {
        this.userDepartment = userDepartment == null ? null : userDepartment.trim();
    }

    public Integer getUserPower() {
        return userPower;
    }

    public void setUserPower(Integer userPower) {
        this.userPower = userPower;
    }

    public String getUserWechat() {
        return userWechat;
    }

    public void setUserWechat(String userWechat) {
        this.userWechat = userWechat == null ? null : userWechat.trim();
    }
}