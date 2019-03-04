package com.ylw.model;

import java.util.Date;

public class Attendance {
    private Integer attendID;

    private Integer userID;

    private Date attendDate;

    private Date amDate;

    private Date pmDate;

    private String amState;

    private String pmState;

    private String attendAddress;

    private Integer isAudited;

    private Integer isError;

    private User user;

    public Attendance(Integer attendID, Integer userID, Date attendDate, Date amDate, Date pmDate, String amState, String pmState, String attendAddress, Integer isAudited, Integer isError) {
        this.attendID = attendID;
        this.userID = userID;
        this.attendDate = attendDate;
        this.amDate = amDate;
        this.pmDate = pmDate;
        this.amState = amState;
        this.pmState = pmState;
        this.attendAddress = attendAddress;
        this.isAudited = isAudited;
        this.isError = isError;
    }

    public Attendance() {
        super();
    }

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

    public Date getAttendDate() {
        return attendDate;
    }

    public void setAttendDate(Date attendDate) {
        this.attendDate = attendDate;
    }

    public Date getAmDate() {
        return amDate;
    }

    public void setAmDate(Date amDate) {
        this.amDate = amDate;
    }

    public Date getPmDate() {
        return pmDate;
    }

    public void setPmDate(Date pmDate) {
        this.pmDate = pmDate;
    }

    public String getAmState() {
        return amState;
    }

    public void setAmState(String amState) {
        this.amState = amState == null ? null : amState.trim();
    }

    public String getPmState() {
        return pmState;
    }

    public void setPmState(String pmState) {
        this.pmState = pmState == null ? null : pmState.trim();
    }

    public String getAttendAddress() {
        return attendAddress;
    }

    public void setAttendAddress(String attendAddress) {
        this.attendAddress = attendAddress == null ? null : attendAddress.trim();
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}