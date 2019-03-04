package com.ylw.timer;

import com.ylw.dao.AttendanceMapper;
import com.ylw.dao.UserMapper;
import com.ylw.model.Attendance;
import com.ylw.model.User;
import com.ylw.model.UserExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Component
public class AttendanceTimer {

    //	这表示延迟执行，每5秒执行一次，也就是不确定开始时间
//    @Scheduled(fixedDelay=1000000)
//    public void doSomethingWithDelay(){
//        System.out.println("55555");
//    }

    @Autowired
    UserMapper userMapper;
    @Autowired
    AttendanceMapper attendanceMapper;

    List<User> users = new ArrayList<>();


    //	表示服务器启动的时候立即执行，每5秒执行一次
    @Scheduled(fixedRate=500000)
    public void doSomethingWithRate(){
    }

    //	cron表达式，表示 每天上午1:00触发
    @Scheduled(cron="0 0 0 ? * *")
    public void doSomethingWithCron(){
        System.out.println("生成该月Attendance表基础数据");

        UserExample userExample =new UserExample();
        userExample.createCriteria().andUserIDBetween(-1,200);
        users = userMapper.selectByExample(userExample);

        for (int j=0; j<users.size(); j++){
            Attendance attendance = createInitAttendance();
            attendance.setAttendDate(new Date());
            attendance.setUserID(users.get(j).getUserID());
            attendanceMapper.insertInitAttendance(attendance);
        }
    }

    public Attendance createInitAttendance(){

        Attendance attendance = new Attendance();
        attendance.setAmDate(null);
        attendance.setPmDate(null);
        attendance.setAmState("缺卡");
        attendance.setPmState("缺卡");
        attendance.setAttendAddress("暂无");
        attendance.setIsAudited(1);
        attendance.setIsError(0);

        return attendance;
    }

    public boolean isTheSameDay(Date date1, Date date2){
        if(date1 != null && date2 != null) {
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(date1);
            Calendar cal2 = Calendar.getInstance();
            cal2.setTime(date2);
            if(cal1 != null && cal2 != null) {
                return cal1.get(0) == cal2.get(0) && cal1.get(1) == cal2.get(1) && cal1.get(6) == cal2.get(6);
            } else {
                throw new IllegalArgumentException("The date must not be null");
            }
        } else {
            throw new IllegalArgumentException("The date can not be null");
        }
    }


    public Date[] everyMonthDay(int number) {
        Calendar a = Calendar.getInstance();
        if(number!=0){
            a.set(Calendar.MONTH, number-1);
        }
        a.set(Calendar.HOUR_OF_DAY, 0);
        a.set(Calendar.MINUTE, 0);
        a.set(Calendar.SECOND, 0);

        int maxDay = a.getActualMaximum(a.DATE);
        Date[] mDay = new Date[maxDay];

        for(int i=1; i<=maxDay; i++){
            a.set(Calendar.DATE, i);
            mDay[i-1] = a.getTime();
        }

        return mDay;
    }

}