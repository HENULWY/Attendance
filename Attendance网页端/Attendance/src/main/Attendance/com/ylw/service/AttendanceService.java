package com.ylw.service;

import com.ylw.bean.PagedResult;
import com.ylw.model.Attendance;

import java.util.Date;
import java.util.List;

public interface AttendanceService {

    public boolean insertAttendance(Attendance attendance);
    public List<Attendance> selectAttendance(int userID, int pageIndex);
    public List<Attendance> selectAttendance(int userID);
    public int updateAttendance(Integer userID, Date signInDate, String signInAddress);
    public PagedResult<Attendance> searchAttendance(Integer pageNumber, Integer pageSize, Integer userID, String department, Date startDate, Date endDate);
    public Attendance attendanceDetail(Integer attendanceID);
    public int updateAttendance(Attendance attendance);
}
