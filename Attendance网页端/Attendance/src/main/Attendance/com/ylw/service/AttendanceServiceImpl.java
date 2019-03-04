package com.ylw.service;

import com.github.pagehelper.PageHelper;
import com.ylw.bean.PagedResult;
import com.ylw.dao.AttendanceMapper;
import com.ylw.model.Attendance;
import com.ylw.model.AttendanceExample;
import com.ylw.util.BeanUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service("AttendanceService")
public class AttendanceServiceImpl implements  AttendanceService{
    public long zero;
    public long nine;
    public long nine_half;
    public long twelve;
    public long thirteen;
    public long seventeen_half;
    public long eightteen;

    Calendar c = Calendar.getInstance();

    @Autowired
    AttendanceMapper attendanceMapper;

    private long formatTimePoint(long timePoint){
        if((""+timePoint).length()==10){
            timePoint *= 1000;
        }
        return timePoint;
    }

    private void initLegalTimes(long timePoint){
        timePoint = formatTimePoint(timePoint);
        Date signDay = new Date(timePoint);
        initLegalTimes(signDay);
    }

    private void initLegalTimes(Date signDate){
        c.setTime(signDate);
        c.set(Calendar.SECOND, 0);

        c.set(Calendar.HOUR_OF_DAY, 0);
        c.set(Calendar.MINUTE, 0);
        zero = c.getTimeInMillis();

        c.set(Calendar.HOUR_OF_DAY, 9);
        c.set(Calendar.MINUTE, 0);
        nine = c.getTimeInMillis();

        c.set(Calendar.MINUTE, 30);
        nine_half = c.getTimeInMillis();

        c.set(Calendar.HOUR_OF_DAY, 12);
        c.set(Calendar.MINUTE, 0);
        twelve = c.getTimeInMillis();

        c.set(Calendar.HOUR_OF_DAY, 13);
        c.set(Calendar.MINUTE, 0);
        thirteen = c.getTimeInMillis();

        c.set(Calendar.HOUR_OF_DAY, 17);
        c.set(Calendar.MINUTE, 30);
        seventeen_half = c.getTimeInMillis();

        c.set(Calendar.HOUR_OF_DAY, 18);
        c.set(Calendar.MINUTE, 0);
        eightteen = c.getTimeInMillis();
    }

    public String getAttendState(long timePoint){
        timePoint = formatTimePoint(timePoint);

        initLegalTimes(timePoint);
        if(timePoint<=nine){
            return "正常签到";
        }else if(timePoint>nine&&timePoint<=nine_half){
            return "迟到";
        }else if(timePoint>nine_half&&timePoint<thirteen){
            return "异常";
        }else if(timePoint>=thirteen&&timePoint<seventeen_half){
            return "异常";
        }else if(timePoint>=seventeen_half&&timePoint<eightteen){
            return "早退";
        }else if(timePoint>=eightteen){
            return "正常签退";
        }else if(timePoint==0){
            return "time_block";
        }
        return "time_block";
    }

    @Override
    public boolean insertAttendance(Attendance attendance) {
        if(attendance.getUserID()!=null){
            attendanceMapper.insert(attendance);
            return true;
        }

        return false;
    }

    @Override
    public List<Attendance> selectAttendance(int userID) {
        if(userID!=0){
            AttendanceExample attendanceExample = new AttendanceExample();
            attendanceExample.createCriteria().andUserIDEqualTo(userID);
            attendanceExample.setOrderByClause("attendDate ASC");

            List<Attendance> attendanceList = attendanceMapper.selectByExample(attendanceExample);

            return attendanceList;
        }
        return null;
    }

    @Override
    public List<Attendance> selectAttendance(int userID, int pageIndex) {
        if(userID!=0){
            AttendanceExample attendanceExample = new AttendanceExample();
            attendanceExample.createCriteria().andUserIDEqualTo(userID);
            attendanceExample.setStart(0+10*(pageIndex-1));
            attendanceExample.setLimit(10);
            attendanceExample.setOrderByClause("attendDate ASC");

            List<Attendance> attendanceList = attendanceMapper.selectByExample(attendanceExample);

            return attendanceList;
        }
        return null;
    }

    @Override
    public int updateAttendance(Integer userID, Date signInDate, String signInAddress) {
        initLegalTimes(signInDate);

        AttendanceExample attendanceExample = new AttendanceExample();
        AttendanceExample.Criteria criteria = attendanceExample.createCriteria();
        if(userID!=null){
            criteria.andUserIDEqualTo(userID);
        }
        if(signInDate!=null){
            Date zeroDate = new Date(zero);
            Calendar c = Calendar.getInstance();
            c.setTime(zeroDate);
            c.add(Calendar.DAY_OF_MONTH, 1);
            criteria.andAttendDateBetween(zeroDate, c.getTime());
        }
        List<Attendance> attendanceList = attendanceMapper.selectByExample(attendanceExample);
        Attendance attendance = attendanceList.get(0);

        long timePoint = signInDate.getTime();
        if(timePoint<twelve&&attendance.getAmDate()==null){
            attendance.setAmDate(signInDate);
            attendance.setAmState(getAttendState(timePoint));
            attendance.setAttendAddress(signInAddress);
            attendanceMapper.updateByPrimaryKey(attendance);
            return 1;
        }else{
            if(timePoint>twelve){
                attendance.setPmDate(signInDate);
                attendance.setPmState(getAttendState(timePoint));
                attendance.setAttendAddress(signInAddress);
                attendanceMapper.updateByPrimaryKey(attendance);
                return 1;
            }
        }
        return 0;
    }

    @Override
    public PagedResult<Attendance> searchAttendance(Integer pageNumber, Integer pageSize, Integer userID, String department, Date startDate, Date endDate) {
        pageNumber = pageNumber == null?1:pageNumber;
        pageSize = pageSize == null?10:pageSize;
        PageHelper.startPage(pageNumber,pageSize);  //startPage是告诉拦截器说我要开始分页了。分页参数是这两个。

        AttendanceExample attendanceExample = new AttendanceExample();
        AttendanceExample.Criteria criteria = attendanceExample.createCriteria();

        if(userID!=null){
            criteria.andUserIDEqualTo(userID);
        }
        if(startDate!=null){
            criteria.andAttendDateGreaterThanOrEqualTo(startDate);
        }
        if(endDate!=null){
            criteria.andAttendDateLessThanOrEqualTo(endDate);
        }

        List<Attendance> attendanceList = attendanceMapper.selectByExample(attendanceExample);

        if(attendanceList.size()==0){
            return null;
        }else{
            if(department!=null){
                if(department.trim().length()>0){
                    for(int i=attendanceList.size(); i>0; i--){
                        if(!attendanceList.get(i).getUser().getUserDepartment().equals(department)){
                            attendanceList.remove(i);
                        }
                    }
                }
            }
            return BeanUtil.toPagedResult(attendanceList);
        }
    }

    @Override
    public Attendance attendanceDetail(Integer attendanceID) {
        return attendanceMapper.selectByPrimaryKey(attendanceID);
    }

    @Override
    public int updateAttendance(Attendance attendance) {
        return attendanceMapper.updateByPrimaryKey(attendance);
    }
}
