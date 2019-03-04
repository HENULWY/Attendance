package com.ylw.bean;

import java.util.Date;

public class OutAttendance {
    private Integer attendID;

    private Integer userID;

    private String attendDate;

    private String amDate;

    private String pmDate;

    private String amState;

    private String pmState;

    private String attendAddress;

    private Integer isAudited;

    private Integer isError;

    private String userName;

    public Integer getAttendID() {
        return attendID;
    }

    public void setAttendID(Integer attendID) {
        this.attendID = attendID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getAttendDate() {
        return attendDate;
    }

    public void setAttendDate(String attendDate) {
        this.attendDate = attendDate;
    }

    public String getAmDate() {
        return amDate;
    }

    public void setAmDate(String amDate) {
        this.amDate = amDate;
    }

    public String getPmDate() {
        return pmDate;
    }

    public void setPmDate(String pmDate) {
        this.pmDate = pmDate;
    }

    public String getAmState() {
        return amState;
    }

    public void setAmState(String amState) {
        this.amState = amState;
    }

    public String getPmState() {
        return pmState;
    }

    public void setPmState(String pmState) {
        this.pmState = pmState;
    }

    public String getAttendAddress() {
        return attendAddress;
    }

    public void setAttendAddress(String attendAddress) {
        this.attendAddress = attendAddress;
    }

    public Integer getIsAudited() {
        return isAudited;
    }

    public void setIsAudited(Integer isAudited) {
        this.isAudited = isAudited;
    }

    public Integer getIsError() {
        return isError;
    }

    public void setIsError(Integer isError) {
        this.isError = isError;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
