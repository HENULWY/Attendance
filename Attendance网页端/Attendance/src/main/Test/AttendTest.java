import com.ylw.dao.AttendanceMapper;
import com.ylw.dao.UserMapper;
import com.ylw.model.Attendance;
import com.ylw.model.User;
import com.ylw.model.UserExample;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class AttendTest {

    private static ApplicationContext ac;
    static {
        ac = new ClassPathXmlApplicationContext("applicationContext.xml");
    }

    static List<User> users = new ArrayList<>();

//    @Autowired
//    static UserMapper userMapper;
////
//    @Autowired
//    static AttendanceMapper attendanceMapper;

    public static void main(String[] args) {
        System.out.println("生成该月Attendance表基础数据");
//
        UserMapper userMapper = (UserMapper) ac.getBean("UserMapper");
        AttendanceMapper attendanceMapper = (AttendanceMapper) ac.getBean("AttendanceMapper");

        UserExample userExample =new UserExample();
        userExample.createCriteria().andUserIDBetween(-1,200);
        users = userMapper.selectByExample(userExample);

        Date[] dates = everyMonthDay(5);

        for (int i= 0;i<dates.length ; i++){
            if(i!=0){
                if(isTheSameDay(dates[i-1], new Date())){
                    return;
                }
            }

            System.out.println(dates[i]);
//            for (User item : users) {
//                Attendance attendance = createInitAttendance();
//                attendance.setAttendDate(dates[i]);
//                attendance.setUserID(item.getUserID());
//                attendanceMapper.insert(attendance);
//            }
        }

    }

    public static Attendance createInitAttendance(){

        Attendance attendance = new Attendance();
        attendance.setAttendDate(null);
        attendance.setAmDate(null);
        attendance.setPmDate(null);
        attendance.setAmState("缺卡");
        attendance.setPmState("缺卡");
        attendance.setAttendAddress("暂无");
        attendance.setIsAudited(1);
        attendance.setIsError(0);

        return null;
    }

    public static boolean isTheSameDay(Date date1, Date date2){
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

    public static Date[] everyMonthDay(int number) {
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
