package com.ylw.model;

import java.util.Date;

public class Signin {
    private Integer signInID;

    private Integer userID;

    private Date signInDate;

    private String signInAddress;

    private User user;

    public Signin(Integer signInID, Integer userID, Date signInDate, String signInAddress) {
        this.signInID = signInID;
        this.userID = userID;
        this.signInDate = signInDate;
        this.signInAddress = signInAddress;
    }

    public Signin() {
        super();
    }

    public Integer getSignInID() {
        return signInID;
    }

    public void setSignInID(Integer signInID) {
        this.signInID = signInID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Date getSignInDate() {
        return signInDate;
    }

    public void setSignInDate(Date signInDate) {
        this.signInDate = signInDate;
    }

    public String getSignInAddress() {
        return signInAddress;
    }

    public void setSignInAddress(String signInAddress) {
        this.signInAddress = signInAddress == null ? null : signInAddress.trim();
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}