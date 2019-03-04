package com.ylw.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SigninExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected int start;//设置分页开始

    protected int limit;//设置分页的每页的数量</strong>

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public SigninExample() {
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

        public Criteria andSignInIDIsNull() {
            addCriterion("signInID is null");
            return (Criteria) this;
        }

        public Criteria andSignInIDIsNotNull() {
            addCriterion("signInID is not null");
            return (Criteria) this;
        }

        public Criteria andSignInIDEqualTo(Integer value) {
            addCriterion("signInID =", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDNotEqualTo(Integer value) {
            addCriterion("signInID <>", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDGreaterThan(Integer value) {
            addCriterion("signInID >", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDGreaterThanOrEqualTo(Integer value) {
            addCriterion("signInID >=", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDLessThan(Integer value) {
            addCriterion("signInID <", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDLessThanOrEqualTo(Integer value) {
            addCriterion("signInID <=", value, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDIn(List<Integer> values) {
            addCriterion("signInID in", values, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDNotIn(List<Integer> values) {
            addCriterion("signInID not in", values, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDBetween(Integer value1, Integer value2) {
            addCriterion("signInID between", value1, value2, "signInID");
            return (Criteria) this;
        }

        public Criteria andSignInIDNotBetween(Integer value1, Integer value2) {
            addCriterion("signInID not between", value1, value2, "signInID");
            return (Criteria) this;
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

        public Criteria andSignInDateIsNull() {
            addCriterion("signInDate is null");
            return (Criteria) this;
        }

        public Criteria andSignInDateIsNotNull() {
            addCriterion("signInDate is not null");
            return (Criteria) this;
        }

        public Criteria andSignInDateEqualTo(Date value) {
            addCriterion("signInDate =", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateNotEqualTo(Date value) {
            addCriterion("signInDate <>", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateGreaterThan(Date value) {
            addCriterion("signInDate >", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateGreaterThanOrEqualTo(Date value) {
            addCriterion("signInDate >=", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateLessThan(Date value) {
            addCriterion("signInDate <", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateLessThanOrEqualTo(Date value) {
            addCriterion("signInDate <=", value, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateIn(List<Date> values) {
            addCriterion("signInDate in", values, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateNotIn(List<Date> values) {
            addCriterion("signInDate not in", values, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateBetween(Date value1, Date value2) {
            addCriterion("signInDate between", value1, value2, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInDateNotBetween(Date value1, Date value2) {
            addCriterion("signInDate not between", value1, value2, "signInDate");
            return (Criteria) this;
        }

        public Criteria andSignInAddressIsNull() {
            addCriterion("signInAddress is null");
            return (Criteria) this;
        }

        public Criteria andSignInAddressIsNotNull() {
            addCriterion("signInAddress is not null");
            return (Criteria) this;
        }

        public Criteria andSignInAddressEqualTo(String value) {
            addCriterion("signInAddress =", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressNotEqualTo(String value) {
            addCriterion("signInAddress <>", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressGreaterThan(String value) {
            addCriterion("signInAddress >", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressGreaterThanOrEqualTo(String value) {
            addCriterion("signInAddress >=", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressLessThan(String value) {
            addCriterion("signInAddress <", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressLessThanOrEqualTo(String value) {
            addCriterion("signInAddress <=", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressLike(String value) {
            addCriterion("signInAddress like", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressNotLike(String value) {
            addCriterion("signInAddress not like", value, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressIn(List<String> values) {
            addCriterion("signInAddress in", values, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressNotIn(List<String> values) {
            addCriterion("signInAddress not in", values, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressBetween(String value1, String value2) {
            addCriterion("signInAddress between", value1, value2, "signInAddress");
            return (Criteria) this;
        }

        public Criteria andSignInAddressNotBetween(String value1, String value2) {
            addCriterion("signInAddress not between", value1, value2, "signInAddress");
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