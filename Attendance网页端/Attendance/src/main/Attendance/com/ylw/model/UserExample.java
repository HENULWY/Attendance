package com.ylw.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class UserExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public UserExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andUserIDIsNull() {
            addCriterion("userID is null");
            return (Criteria) this;
        }

        public Criteria andUserIDIsNotNull() {
            addCriterion("userID is not null");
            return (Criteria) this;
        }

        public Criteria andUserIDEqualTo(Integer value) {
            addCriterion("userID =", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDNotEqualTo(Integer value) {
            addCriterion("userID <>", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDGreaterThan(Integer value) {
            addCriterion("userID >", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDGreaterThanOrEqualTo(Integer value) {
            addCriterion("userID >=", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDLessThan(Integer value) {
            addCriterion("userID <", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDLessThanOrEqualTo(Integer value) {
            addCriterion("userID <=", value, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDIn(List<Integer> values) {
            addCriterion("userID in", values, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDNotIn(List<Integer> values) {
            addCriterion("userID not in", values, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDBetween(Integer value1, Integer value2) {
            addCriterion("userID between", value1, value2, "userID");
            return (Criteria) this;
        }

        public Criteria andUserIDNotBetween(Integer value1, Integer value2) {
            addCriterion("userID not between", value1, value2, "userID");
            return (Criteria) this;
        }

        public Criteria andUserAccountIsNull() {
            addCriterion("userAccount is null");
            return (Criteria) this;
        }

        public Criteria andUserAccountIsNotNull() {
            addCriterion("userAccount is not null");
            return (Criteria) this;
        }

        public Criteria andUserAccountEqualTo(String value) {
            addCriterion("userAccount =", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountNotEqualTo(String value) {
            addCriterion("userAccount <>", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountGreaterThan(String value) {
            addCriterion("userAccount >", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountGreaterThanOrEqualTo(String value) {
            addCriterion("userAccount >=", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountLessThan(String value) {
            addCriterion("userAccount <", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountLessThanOrEqualTo(String value) {
            addCriterion("userAccount <=", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountLike(String value) {
            addCriterion("userAccount like", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountNotLike(String value) {
            addCriterion("userAccount not like", value, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountIn(List<String> values) {
            addCriterion("userAccount in", values, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountNotIn(List<String> values) {
            addCriterion("userAccount not in", values, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountBetween(String value1, String value2) {
            addCriterion("userAccount between", value1, value2, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserAccountNotBetween(String value1, String value2) {
            addCriterion("userAccount not between", value1, value2, "userAccount");
            return (Criteria) this;
        }

        public Criteria andUserPasswordIsNull() {
            addCriterion("userPassword is null");
            return (Criteria) this;
        }

        public Criteria andUserPasswordIsNotNull() {
            addCriterion("userPassword is not null");
            return (Criteria) this;
        }

        public Criteria andUserPasswordEqualTo(String value) {
            addCriterion("userPassword =", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordNotEqualTo(String value) {
            addCriterion("userPassword <>", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordGreaterThan(String value) {
            addCriterion("userPassword >", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("userPassword >=", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordLessThan(String value) {
            addCriterion("userPassword <", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordLessThanOrEqualTo(String value) {
            addCriterion("userPassword <=", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordLike(String value) {
            addCriterion("userPassword like", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordNotLike(String value) {
            addCriterion("userPassword not like", value, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordIn(List<String> values) {
            addCriterion("userPassword in", values, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordNotIn(List<String> values) {
            addCriterion("userPassword not in", values, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordBetween(String value1, String value2) {
            addCriterion("userPassword between", value1, value2, "userPassword");
            return (Criteria) this;
        }

        public Criteria andUserPasswordNotBetween(String value1, String value2) {
            addCriterion("userPassword not between", value1, value2, "userPassword");
            return (Criteria) this;
        }

        public Criteria andCompanyIDIsNull() {
            addCriterion("CompanyID is null");
            return (Criteria) this;
        }

        public Criteria andCompanyIDIsNotNull() {
            addCriterion("CompanyID is not null");
            return (Criteria) this;
        }

        public Criteria andCompanyIDEqualTo(String value) {
            addCriterion("CompanyID =", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDNotEqualTo(String value) {
            addCriterion("CompanyID <>", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDGreaterThan(String value) {
            addCriterion("CompanyID >", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDGreaterThanOrEqualTo(String value) {
            addCriterion("CompanyID >=", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDLessThan(String value) {
            addCriterion("CompanyID <", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDLessThanOrEqualTo(String value) {
            addCriterion("CompanyID <=", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDLike(String value) {
            addCriterion("CompanyID like", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDNotLike(String value) {
            addCriterion("CompanyID not like", value, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDIn(List<String> values) {
            addCriterion("CompanyID in", values, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDNotIn(List<String> values) {
            addCriterion("CompanyID not in", values, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDBetween(String value1, String value2) {
            addCriterion("CompanyID between", value1, value2, "companyID");
            return (Criteria) this;
        }

        public Criteria andCompanyIDNotBetween(String value1, String value2) {
            addCriterion("CompanyID not between", value1, value2, "companyID");
            return (Criteria) this;
        }

        public Criteria andUserPhoneIsNull() {
            addCriterion("userPhone is null");
            return (Criteria) this;
        }

        public Criteria andUserPhoneIsNotNull() {
            addCriterion("userPhone is not null");
            return (Criteria) this;
        }

        public Criteria andUserPhoneEqualTo(String value) {
            addCriterion("userPhone =", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneNotEqualTo(String value) {
            addCriterion("userPhone <>", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneGreaterThan(String value) {
            addCriterion("userPhone >", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("userPhone >=", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneLessThan(String value) {
            addCriterion("userPhone <", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneLessThanOrEqualTo(String value) {
            addCriterion("userPhone <=", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneLike(String value) {
            addCriterion("userPhone like", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneNotLike(String value) {
            addCriterion("userPhone not like", value, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneIn(List<String> values) {
            addCriterion("userPhone in", values, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneNotIn(List<String> values) {
            addCriterion("userPhone not in", values, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneBetween(String value1, String value2) {
            addCriterion("userPhone between", value1, value2, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserPhoneNotBetween(String value1, String value2) {
            addCriterion("userPhone not between", value1, value2, "userPhone");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNull() {
            addCriterion("userName is null");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNotNull() {
            addCriterion("userName is not null");
            return (Criteria) this;
        }

        public Criteria andUserNameEqualTo(String value) {
            addCriterion("userName =", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotEqualTo(String value) {
            addCriterion("userName <>", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThan(String value) {
            addCriterion("userName >", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("userName >=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThan(String value) {
            addCriterion("userName <", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThanOrEqualTo(String value) {
            addCriterion("userName <=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLike(String value) {
            addCriterion("userName like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotLike(String value) {
            addCriterion("userName not like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameIn(List<String> values) {
            addCriterion("userName in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotIn(List<String> values) {
            addCriterion("userName not in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameBetween(String value1, String value2) {
            addCriterion("userName between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotBetween(String value1, String value2) {
            addCriterion("userName not between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayIsNull() {
            addCriterion("userBirthDay is null");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayIsNotNull() {
            addCriterion("userBirthDay is not null");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayEqualTo(Date value) {
            addCriterion("userBirthDay =", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayNotEqualTo(Date value) {
            addCriterion("userBirthDay <>", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayGreaterThan(Date value) {
            addCriterion("userBirthDay >", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayGreaterThanOrEqualTo(Date value) {
            addCriterion("userBirthDay >=", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayLessThan(Date value) {
            addCriterion("userBirthDay <", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayLessThanOrEqualTo(Date value) {
            addCriterion("userBirthDay <=", value, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayIn(List<Date> values) {
            addCriterion("userBirthDay in", values, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayNotIn(List<Date> values) {
            addCriterion("userBirthDay not in", values, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayBetween(Date value1, Date value2) {
            addCriterion("userBirthDay between", value1, value2, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserBirthDayNotBetween(Date value1, Date value2) {
            addCriterion("userBirthDay not between", value1, value2, "userBirthDay");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentIsNull() {
            addCriterion("userDepartment is null");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentIsNotNull() {
            addCriterion("userDepartment is not null");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentEqualTo(String value) {
            addCriterion("userDepartment =", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentNotEqualTo(String value) {
            addCriterion("userDepartment <>", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentGreaterThan(String value) {
            addCriterion("userDepartment >", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentGreaterThanOrEqualTo(String value) {
            addCriterion("userDepartment >=", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentLessThan(String value) {
            addCriterion("userDepartment <", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentLessThanOrEqualTo(String value) {
            addCriterion("userDepartment <=", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentLike(String value) {
            addCriterion("userDepartment like", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentNotLike(String value) {
            addCriterion("userDepartment not like", value, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentIn(List<String> values) {
            addCriterion("userDepartment in", values, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentNotIn(List<String> values) {
            addCriterion("userDepartment not in", values, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentBetween(String value1, String value2) {
            addCriterion("userDepartment between", value1, value2, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserDepartmentNotBetween(String value1, String value2) {
            addCriterion("userDepartment not between", value1, value2, "userDepartment");
            return (Criteria) this;
        }

        public Criteria andUserPowerIsNull() {
            addCriterion("userPower is null");
            return (Criteria) this;
        }

        public Criteria andUserPowerIsNotNull() {
            addCriterion("userPower is not null");
            return (Criteria) this;
        }

        public Criteria andUserPowerEqualTo(Integer value) {
            addCriterion("userPower =", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerNotEqualTo(Integer value) {
            addCriterion("userPower <>", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerGreaterThan(Integer value) {
            addCriterion("userPower >", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerGreaterThanOrEqualTo(Integer value) {
            addCriterion("userPower >=", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerLessThan(Integer value) {
            addCriterion("userPower <", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerLessThanOrEqualTo(Integer value) {
            addCriterion("userPower <=", value, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerIn(List<Integer> values) {
            addCriterion("userPower in", values, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerNotIn(List<Integer> values) {
            addCriterion("userPower not in", values, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerBetween(Integer value1, Integer value2) {
            addCriterion("userPower between", value1, value2, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserPowerNotBetween(Integer value1, Integer value2) {
            addCriterion("userPower not between", value1, value2, "userPower");
            return (Criteria) this;
        }

        public Criteria andUserWechatIsNull() {
            addCriterion("userWechat is null");
            return (Criteria) this;
        }

        public Criteria andUserWechatIsNotNull() {
            addCriterion("userWechat is not null");
            return (Criteria) this;
        }

        public Criteria andUserWechatEqualTo(String value) {
            addCriterion("userWechat =", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatNotEqualTo(String value) {
            addCriterion("userWechat <>", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatGreaterThan(String value) {
            addCriterion("userWechat >", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatGreaterThanOrEqualTo(String value) {
            addCriterion("userWechat >=", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatLessThan(String value) {
            addCriterion("userWechat <", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatLessThanOrEqualTo(String value) {
            addCriterion("userWechat <=", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatLike(String value) {
            addCriterion("userWechat like", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatNotLike(String value) {
            addCriterion("userWechat not like", value, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatIn(List<String> values) {
            addCriterion("userWechat in", values, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatNotIn(List<String> values) {
            addCriterion("userWechat not in", values, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatBetween(String value1, String value2) {
            addCriterion("userWechat between", value1, value2, "userWechat");
            return (Criteria) this;
        }

        public Criteria andUserWechatNotBetween(String value1, String value2) {
            addCriterion("userWechat not between", value1, value2, "userWechat");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}