package com.ylw.controller;

import com.ylw.bean.OutAttendance;
import com.ylw.bean.PagedResult;
import com.ylw.model.Attendance;
import com.ylw.model.User;
import com.ylw.service.AttendanceService;
import com.ylw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/attending")
@Scope("prototype")
public class AttendanceController {
    @Autowired
    AttendanceService attendanceService;

    @Autowired
    UserService userService;

    /**
     * form表单提交 Date类型数据绑定
     * <功能详细描述>
     *
     * @param binder
     * @see [类、类#方法、类#成员]
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }

    @RequestMapping("/selectAttendance")
    public @ResponseBody
    Map<String, Object> selectSignIn(User user,Object body, String pageIndex, HttpServletRequest request) {
        User resultUser = userService.getUserByOpenId(user);

        if (resultUser != null) {
            List<Attendance> attendanceList = attendanceService.selectAttendance(resultUser.getUserID(), Integer.parseInt(pageIndex));

            if (attendanceList.size() != 0) {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                SimpleDateFormat sdfyMd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                SimpleDateFormat sdfyYmd = new SimpleDateFormat("yyyy-MM-dd");
                Map<String, Object> attendanceMap = new HashMap<String, Object>();
                List<OutAttendance> outAttendanceList = new ArrayList<>();

                for (Attendance item : attendanceList) {
                    OutAttendance outAttendance = new OutAttendance();

                    outAttendance.setUserName(item.getUser().getUserName());
                    outAttendance.setAttendID(item.getAttendID());
                    outAttendance.setUserID(item.getUserID());
                    outAttendance.setAttendDate(sdfyYmd.format(item.getAttendDate()));
                    if(item.getAmDate()!=null){
                        outAttendance.setAmDate(sdf.format(item.getAmDate()));
                    }
                    outAttendance.setAmState(item.getAmState());
                    if(item.getPmDate()!=null){
                        outAttendance.setPmDate(sdf.format(item.getPmDate()));
                    }
                    outAttendance.setPmState(item.getPmState());
                    outAttendance.setAttendAddress(item.getAttendAddress());
                    outAttendance.setIsAudited(item.getIsAudited());
                    outAttendance.setIsError(item.getIsError());

                    outAttendanceList.add(outAttendance);
                }
                attendanceMap.put("code", 0);
                attendanceMap.put("message", "连接成功");
                attendanceMap.put("data", outAttendanceList);
                return attendanceMap;
            }
        }
        return null;
    }


    @RequestMapping(value = "/attendance_table", method = RequestMethod.GET)
    public String tables(Model model, HttpServletRequest request) {

        User user = (User) request.getSession().getAttribute("user");
        List<Attendance> attendanceList = attendanceService.selectAttendance(user.getUserID());

        model.addAttribute("attendanceList", attendanceList);
        return "attendance_table";
    }


    @RequestMapping(value = "/searchAttendance", method = RequestMethod.POST)
    public @ResponseBody
    PagedResult<Attendance> searchSignin(Integer pageNumber, Integer pageSize, String attendanceName, String department, Date startDate, Date endDate, HttpServletRequest request) {
        Integer userID = null;

        userID = ((User)request.getSession().getAttribute("user")).getUserID();
        if(attendanceName!=null){
            if(!attendanceName.trim().isEmpty()){
                User user = userService.getUserByUserName(attendanceName);
                if(user!=null){
                    userID = user.getUserID();
                }
            }
        }
        PagedResult<Attendance> pageResult = attendanceService.searchAttendance(pageNumber, pageSize, userID, department, startDate, endDate);
        return pageResult;
    }



    @RequestMapping(value = "/attendanceDetail", method = RequestMethod.POST)
    public @ResponseBody
    Map attendanceDetail(String userWechat, String attendID, HttpServletRequest request) {
        User tempUser = new User();
        tempUser.setUserWechat(userWechat);
        User resultUser = userService.getUserByOpenId(tempUser);
        if (resultUser != null) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            SimpleDateFormat sdfyHms = new SimpleDateFormat("HH:mm:ss");
            SimpleDateFormat sdfyYmd = new SimpleDateFormat("yyyy-MM-dd");
            Attendance attendanceDetail = attendanceService.attendanceDetail(Integer.parseInt(attendID));
            if (attendanceDetail!=null) {
                Map<String, String> map = new HashMap<>();
                map.put("attendID", attendanceDetail.getAttendID()+"");
                map.put("userID", attendanceDetail.getUserID()+"");
                map.put("attendDate", sdfyYmd.format(attendanceDetail.getAttendDate()));
                map.put("amState",attendanceDetail.getAmState());
                if(attendanceDetail.getAmDate()!=null){
                    map.put("amDate",sdfyHms.format(attendanceDetail.getAmDate()));
                }
                map.put("pmState",attendanceDetail.getPmState());
                if (attendanceDetail.getPmDate()!=null){
                    map.put("pmDate",sdfyHms.format(attendanceDetail.getPmDate()));
                }
                map.put("attendAddress", attendanceDetail.getAttendAddress());

                return map;
            }
        }
        return null;
    }

    @RequestMapping(value = "/updateAttendance", method = RequestMethod.POST)
    public @ResponseBody
    String updateAttendance(String userWechat, String attendID, String remake, HttpServletRequest request) {
        User tempUser = new User();
        tempUser.setUserWechat(userWechat);
        User resultUser = userService.getUserByOpenId(tempUser);
        if (resultUser != null&&remake!=null) {
            if(!remake.isEmpty()){
                Attendance attendanceDetail = attendanceService.attendanceDetail(Integer.parseInt(attendID));
                attendanceDetail.setIsError(1);
                attendanceService.updateAttendance(attendanceDetail);
                return "success";
            }
        }
        return null;
    }

    @RequestMapping("/edit")
    public String edit(Model model, HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");

        System.out.println("ffffffff");
        model.addAttribute("user", user);

        return "attendance_edit";
    }

}
