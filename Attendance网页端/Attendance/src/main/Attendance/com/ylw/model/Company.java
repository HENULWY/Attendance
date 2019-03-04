package com.ylw.model;

public class Company {
    private Integer companyID;

    private String companyName;

    private String companyAddress;

    public Company(Integer companyID, String companyName, String companyAddress) {
        this.companyID = companyID;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
    }

    public Company() {
        super();
    }

    public Integer getCompanyID() {
        return companyID;
    }

    public void setCompanyID(Integer companyID) {
        this.companyID = companyID;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName == null ? null : companyName.trim();
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress == null ? null : companyAddress.trim();
    }
}