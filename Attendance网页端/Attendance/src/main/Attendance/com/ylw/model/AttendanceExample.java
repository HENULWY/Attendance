package com.ylw.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AttendanceExample {
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

    public AttendanceExample() {
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

        public Criteria andAttendIDIsNull() {
            addCriterion("attendID is null");
            return (Criteria) this;
        }

        public Criteria andAttendIDIsNotNull() {
            addCriterion("attendID is not null");
            return (Criteria) this;
        }

        public Criteria andAttendIDEqualTo(Integer value) {
            addCriterion("attendID =", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDNotEqualTo(Integer value) {
            addCriterion("attendID <>", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDGreaterThan(Integer value) {
            addCriterion("attendID >", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDGreaterThanOrEqualTo(Integer value) {
            addCriterion("attendID >=", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDLessThan(Integer value) {
            addCriterion("attendID <", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDLessThanOrEqualTo(Integer value) {
            addCriterion("attendID <=", value, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDIn(List<Integer> values) {
            addCriterion("attendID in", values, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDNotIn(List<Integer> values) {
            addCriterion("attendID not in", values, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDBetween(Integer value1, Integer value2) {
            addCriterion("attendID between", value1, value2, "attendID");
            return (Criteria) this;
        }

        public Criteria andAttendIDNotBetween(Integer value1, Integer value2) {
            addCriterion("attendID not between", value1, value2, "attendID");
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

        public Criteria andAttendDateIsNull() {
            addCriterion("attendDate is null");
            return (Criteria) this;
        }

        public Criteria andAttendDateIsNotNull() {
            addCriterion("attendDate is not null");
            return (Criteria) this;
        }

        public Criteria andAttendDateEqualTo(Date value) {
            addCriterion("attendDate =", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateNotEqualTo(Date value) {
            addCriterion("attendDate <>", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateGreaterThan(Date value) {
            addCriterion("attendDate >", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateGreaterThanOrEqualTo(Date value) {
            addCriterion("attendDate >=", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateLessThan(Date value) {
            addCriterion("attendDate <", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateLessThanOrEqualTo(Date value) {
            addCriterion("attendDate <=", value, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateIn(List<Date> values) {
            addCriterion("attendDate in", values, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateNotIn(List<Date> values) {
            addCriterion("attendDate not in", values, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateBetween(Date value1, Date value2) {
            addCriterion("attendDate between", value1, value2, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAttendDateNotBetween(Date value1, Date value2) {
            addCriterion("attendDate not between", value1, value2, "attendDate");
            return (Criteria) this;
        }

        public Criteria andAmDateIsNull() {
            addCriterion("amDate is null");
            return (Criteria) this;
        }

        public Criteria andAmDateIsNotNull() {
            addCriterion("amDate is not null");
            return (Criteria) this;
        }

        public Criteria andAmDateEqualTo(Date value) {
            addCriterion("amDate =", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateNotEqualTo(Date value) {
            addCriterion("amDate <>", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateGreaterThan(Date value) {
            addCriterion("amDate >", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateGreaterThanOrEqualTo(Date value) {
            addCriterion("amDate >=", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateLessThan(Date value) {
            addCriterion("amDate <", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateLessThanOrEqualTo(Date value) {
            addCriterion("amDate <=", value, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateIn(List<Date> values) {
            addCriterion("amDate in", values, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateNotIn(List<Date> values) {
            addCriterion("amDate not in", values, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateBetween(Date value1, Date value2) {
            addCriterion("amDate between", value1, value2, "amDate");
            return (Criteria) this;
        }

        public Criteria andAmDateNotBetween(Date value1, Date value2) {
            addCriterion("amDate not between", value1, value2, "amDate");
            return (Criteria) this;
        }

        public Criteria andPmDateIsNull() {
            addCriterion("pmDate is null");
            return (Criteria) this;
        }

        public Criteria andPmDateIsNotNull() {
            addCriterion("pmDate is not null");
            return (Criteria) this;
        }

        public Criteria andPmDateEqualTo(Date value) {
            addCriterion("pmDate =", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateNotEqualTo(Date value) {
            addCriterion("pmDate <>", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateGreaterThan(Date value) {
            addCriterion("pmDate >", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateGreaterThanOrEqualTo(Date value) {
            addCriterion("pmDate >=", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateLessThan(Date value) {
            addCriterion("pmDate <", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateLessThanOrEqualTo(Date value) {
            addCriterion("pmDate <=", value, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateIn(List<Date> values) {
            addCriterion("pmDate in", values, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateNotIn(List<Date> values) {
            addCriterion("pmDate not in", values, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateBetween(Date value1, Date value2) {
            addCriterion("pmDate between", value1, value2, "pmDate");
            return (Criteria) this;
        }

        public Criteria andPmDateNotBetween(Date value1, Date value2) {
            addCriterion("pmDate not between", value1, value2, "pmDate");
            return (Criteria) this;
        }

        public Criteria andAmStateIsNull() {
            addCriterion("amState is null");
            return (Criteria) this;
        }

        public Criteria andAmStateIsNotNull() {
            addCriterion("amState is not null");
            return (Criteria) this;
        }

        public Criteria andAmStateEqualTo(String value) {
            addCriterion("amState =", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateNotEqualTo(String value) {
            addCriterion("amState <>", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateGreaterThan(String value) {
            addCriterion("amState >", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateGreaterThanOrEqualTo(String value) {
            addCriterion("amState >=", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateLessThan(String value) {
            addCriterion("amState <", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateLessThanOrEqualTo(String value) {
            addCriterion("amState <=", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateLike(String value) {
            addCriterion("amState like", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateNotLike(String value) {
            addCriterion("amState not like", value, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateIn(List<String> values) {
            addCriterion("amState in", values, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateNotIn(List<String> values) {
            addCriterion("amState not in", values, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateBetween(String value1, String value2) {
            addCriterion("amState between", value1, value2, "amState");
            return (Criteria) this;
        }

        public Criteria andAmStateNotBetween(String value1, String value2) {
            addCriterion("amState not between", value1, value2, "amState");
            return (Criteria) this;
        }

        public Criteria andPmStateIsNull() {
            addCriterion("pmState is null");
            return (Criteria) this;
        }

        public Criteria andPmStateIsNotNull() {
            addCriterion("pmState is not null");
            return (Criteria) this;
        }

        public Criteria andPmStateEqualTo(String value) {
            addCriterion("pmState =", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateNotEqualTo(String value) {
            addCriterion("pmState <>", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateGreaterThan(String value) {
            addCriterion("pmState >", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateGreaterThanOrEqualTo(String value) {
            addCriterion("pmState >=", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateLessThan(String value) {
            addCriterion("pmState <", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateLessThanOrEqualTo(String value) {
            addCriterion("pmState <=", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateLike(String value) {
            addCriterion("pmState like", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateNotLike(String value) {
            addCriterion("pmState not like", value, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateIn(List<String> values) {
            addCriterion("pmState in", values, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateNotIn(List<String> values) {
            addCriterion("pmState not in", values, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateBetween(String value1, String value2) {
            addCriterion("pmState between", value1, value2, "pmState");
            return (Criteria) this;
        }

        public Criteria andPmStateNotBetween(String value1, String value2) {
            addCriterion("pmState not between", value1, value2, "pmState");
            return (Criteria) this;
        }

        public Criteria andAttendAddressIsNull() {
            addCriterion("attendAddress is null");
            return (Criteria) this;
        }

        public Criteria andAttendAddressIsNotNull() {
            addCriterion("attendAddress is not null");
            return (Criteria) this;
        }

        public Criteria andAttendAddressEqualTo(String value) {
            addCriterion("attendAddress =", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressNotEqualTo(String value) {
            addCriterion("attendAddress <>", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressGreaterThan(String value) {
            addCriterion("attendAddress >", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressGreaterThanOrEqualTo(String value) {
            addCriterion("attendAddress >=", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressLessThan(String value) {
            addCriterion("attendAddress <", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressLessThanOrEqualTo(String value) {
            addCriterion("attendAddress <=", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressLike(String value) {
            addCriterion("attendAddress like", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressNotLike(String value) {
            addCriterion("attendAddress not like", value, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressIn(List<String> values) {
            addCriterion("attendAddress in", values, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressNotIn(List<String> values) {
            addCriterion("attendAddress not in", values, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressBetween(String value1, String value2) {
            addCriterion("attendAddress between", value1, value2, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andAttendAddressNotBetween(String value1, String value2) {
            addCriterion("attendAddress not between", value1, value2, "attendAddress");
            return (Criteria) this;
        }

        public Criteria andIsAuditedIsNull() {
            addCriterion("isAudited is null");
            return (Criteria) this;
        }

        public Criteria andIsAuditedIsNotNull() {
            addCriterion("isAudited is not null");
            return (Criteria) this;
        }

        public Criteria andIsAuditedEqualTo(Integer value) {
            addCriterion("isAudited =", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedNotEqualTo(Integer value) {
            addCriterion("isAudited <>", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedGreaterThan(Integer value) {
            addCriterion("isAudited >", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedGreaterThanOrEqualTo(Integer value) {
            addCriterion("isAudited >=", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedLessThan(Integer value) {
            addCriterion("isAudited <", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedLessThanOrEqualTo(Integer value) {
            addCriterion("isAudited <=", value, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedIn(List<Integer> values) {
            addCriterion("isAudited in", values, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedNotIn(List<Integer> values) {
            addCriterion("isAudited not in", values, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedBetween(Integer value1, Integer value2) {
            addCriterion("isAudited between", value1, value2, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsAuditedNotBetween(Integer value1, Integer value2) {
            addCriterion("isAudited not between", value1, value2, "isAudited");
            return (Criteria) this;
        }

        public Criteria andIsErrorIsNull() {
            addCriterion("isError is null");
            return (Criteria) this;
        }

        public Criteria andIsErrorIsNotNull() {
            addCriterion("isError is not null");
            return (Criteria) this;
        }

        public Criteria andIsErrorEqualTo(Integer value) {
            addCriterion("isError =", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorNotEqualTo(Integer value) {
            addCriterion("isError <>", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorGreaterThan(Integer value) {
            addCriterion("isError >", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorGreaterThanOrEqualTo(Integer value) {
            addCriterion("isError >=", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorLessThan(Integer value) {
            addCriterion("isError <", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorLessThanOrEqualTo(Integer value) {
            addCriterion("isError <=", value, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorIn(List<Integer> values) {
            addCriterion("isError in", values, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorNotIn(List<Integer> values) {
            addCriterion("isError not in", values, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorBetween(Integer value1, Integer value2) {
            addCriterion("isError between", value1, value2, "isError");
            return (Criteria) this;
        }

        public Criteria andIsErrorNotBetween(Integer value1, Integer value2) {
            addCriterion("isError not between", value1, value2, "isError");
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