function timer_select_taskType(){
	var taskType = document.getElementById("MasterTimerEditForm:taskType");//任务类型
	var taskTypePeriod1 = document.getElementById("MasterTimerEditForm:taskTypePeriod1");//任务类型周期1
	var taskTypePeriod2 = document.getElementById("MasterTimerEditForm:taskTypePeriod2");//任务类型周期2
	var taskTypePeriod3 = document.getElementById("MasterTimerEditForm:taskTypePeriod3");//任务类型周期3
	var taskTypePeriod4 = document.getElementById("MasterTimerEditForm:taskTypePeriod4");//任务类型周期4
	var taskIneffectiveDate1 = document.getElementById("MasterTimerEditForm:taskIneffectiveDate1");//任务失效日期1
	var taskIneffectiveDate2 = document.getElementById("MasterTimerEditForm:taskIneffectiveDate2");//任务失效日期2
	var executeMode1 = document.getElementById("MasterTimerEditForm:executeMode1");//执行方式1
	var executeMode2 = document.getElementById("MasterTimerEditForm:executeMode2");//执行方式2
	var triggerTime1 = document.getElementById("MasterTimerEditForm:triggerTime1");//固定执行时间1
	var triggerTime2 = document.getElementById("MasterTimerEditForm:triggerTime2");//固定执行时间2
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");//循环执行时间  开始1
	var loopExeStartTime2 = document.getElementById("MasterTimerEditForm:loopExeStartTime2");//循环执行时间  开始2
	var loopExeEndTime1 = document.getElementById("MasterTimerEditForm:loopExeEndTime1");//循环执行时间  结束1
	var loopExeEndTime2= document.getElementById("MasterTimerEditForm:loopExeEndTime2");//循环执行时间  结束2
	var repeatExeIntervalTime1 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime1");//循环执行间隔时间1
	var repeatExeIntervalTime2 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime2");//循环执行间隔时间2
	
	var span_triggerTime = document.getElementById("span_triggerTime");//固定执行时间 *
	var span_loopExeTime = document.getElementById("span_loopExeTime");//循环执行时间 *
	var span_repeatExeIntervalTime = document.getElementById("span_repeatExeIntervalTime");//循环执行间隔时间 *
	
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//固定执行时间
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//循环执行时间  开始
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//循环执行时间  结束
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//循环执行间隔时间
	
	//---------------------任务类型------------------------------
	if(taskType.value=="0"){//一次性任务
		//任务类型周期
		taskTypePeriod1.style.display = "none";
		taskTypePeriod1.options[0].selected = true;
		taskTypePeriod2.style.display = "";
		taskTypePeriod2.options[0].selected = true;
		taskTypePeriod3.style.display = "none";
		taskTypePeriod3.options[0].selected = true;
		taskTypePeriod4.style.display = "none";
		taskTypePeriod4.options[0].selected = true;
		//任务失效日期
		taskIneffectiveDate1.style.display = "none";
		taskIneffectiveDate1.value = "";
		taskIneffectiveDate2.style.display = "";
		taskIneffectiveDate2.value = "";
		//执行方式
		executeMode1.style.display = "none";
		executeMode1.options[0].selected = true;
		executeMode2.style.display = "";
		executeMode2.options[0].selected = true;
		//固定执行时间
		triggerTime1.style.display = "";
		triggerTime1.value = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
		//循环执行时间
		loopExeStartTime1.style.display = "none";
		loopExeStartTime1.value = "";
		loopExeEndTime1.style.display = "none";
		loopExeEndTime1.value = "";
		loopExeStartTime2.style.display = "";
		loopExeEndTime2.style.display = "";
		span_loopExeTime.style.display = "none";
		//循环执行间隔时间
		repeatExeIntervalTime1.style.display = "none";
		repeatExeIntervalTime1.value = "";
		repeatExeIntervalTime2.style.display = "";
		span_repeatExeIntervalTime.style.display = "none";
		div_msg_loopExeStartTime.innerHTML = "";
		div_msg_loopExeEndTime.innerHTML = "";
		div_msg_repeatExeIntervalTime.innerHTML = "";
	}else{
		if(taskType.value=="1"){//每天
			//任务类型周期
			taskTypePeriod1.style.display = "none";
			taskTypePeriod1.options[0].selected = true;
			taskTypePeriod2.style.display = "";
			taskTypePeriod3.style.display = "none";
			taskTypePeriod3.options[0].selected = true;
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}else if(taskType.value=="2"){//每周
			//任务类型周期
			taskTypePeriod1.style.display = "";
			taskTypePeriod2.style.display = "none";
			taskTypePeriod2.options[0].selected = true;
			taskTypePeriod3.style.display = "none";
			taskTypePeriod3.options[0].selected = true;
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}else if(taskType.value=="3"){//每月
			//任务类型周期
			taskTypePeriod1.style.display = "none";
			taskTypePeriod1.options[0].selected = true;
			taskTypePeriod2.style.display = "none";
			taskTypePeriod2.options[0].selected = true;
			taskTypePeriod3.style.display = "";
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}
		
		//任务失效日期
		taskIneffectiveDate1.style.display = "";
		taskIneffectiveDate2.style.display = "none";
		taskIneffectiveDate2.value = "";
		//执行方式
		executeMode1.style.display = "";
		executeMode2.style.display = "none";
		executeMode2.options[0].selected = true;
		//固定执行时间
		triggerTime1.style.display = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
		//循环执行时间
		loopExeStartTime1.style.display = "none";
		loopExeStartTime1.value = "";
		loopExeEndTime1.style.display = "none";
		loopExeEndTime1.value = "";
		loopExeStartTime2.style.display = "";
		loopExeEndTime2.style.display = "";
		span_loopExeTime.style.display = "none";
		//循环执行间隔时间
		repeatExeIntervalTime1.style.display = "none";
		repeatExeIntervalTime1.value = "";
		repeatExeIntervalTime2.style.display = "";
		span_repeatExeIntervalTime.style.display = "none";
		div_msg_loopExeStartTime.innerHTML = "";
		div_msg_loopExeEndTime.innerHTML = "";
		div_msg_repeatExeIntervalTime.innerHTML = "";
	}
	if(div_msg_triggerTime.innerHTML==""){
		div_msg_triggerTime.style.display = "none";
	}else{
		div_msg_triggerTime.style.display = "";
	}
	if(div_msg_loopExeStartTime.innerHTML==""){
		div_msg_loopExeStartTime.style.display = "none";
	}else{
		div_msg_loopExeStartTime.style.display = "";
	}
	if(div_msg_loopExeEndTime.innerHTML==""){
		div_msg_loopExeEndTime.style.display = "none";
	}else{
		div_msg_loopExeEndTime.style.display = "";
	}
	if(div_msg_repeatExeIntervalTime.innerHTML==""){
		div_msg_repeatExeIntervalTime.style.display = "none";
	}else{
		div_msg_repeatExeIntervalTime.style.display = "";
	}
}