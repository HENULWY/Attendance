function timer_select_executeMode(){
	var executeMode1 = document.getElementById("MasterTimerEditForm:executeMode1");//执行方式1
	var triggerTime1 = document.getElementById("MasterTimerEditForm:triggerTime1");//固定执行时间1
	var triggerTime2 = document.getElementById("MasterTimerEditForm:triggerTime2");//固定执行时间2
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");//循环执行时间  开始1
	var loopExeStartTime2 = document.getElementById("MasterTimerEditForm:loopExeStartTime2");//循环执行时间  开始2
	var loopExeEndTime1 = document.getElementById("MasterTimerEditForm:loopExeEndTime1");//循环执行时间  结束1
	var loopExeEndTime2= document.getElementById("MasterTimerEditForm:loopExeEndTime2");//循环执行时间  结束2
	var repeatExeIntervalTime1 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime1");//循环执行间隔时间1
	var repeatExeIntervalTime2 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime2");//循环执行间隔时间2
	var span_loopExeTime = document.getElementById("span_loopExeTime");//循环执行时间 *
	var span_repeatExeIntervalTime = document.getElementById("span_repeatExeIntervalTime");//循环执行间隔时间 *
	
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//固定执行时间
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//循环执行时间  开始
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//循环执行时间  结束
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//循环执行间隔时间
	
	//---------------------执行方式------------------------------
	if(executeMode1.value=="0"){//固定时间执行
		//固定执行时间
		triggerTime1.style.display = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
		div_msg_triggerTime.style.display = "";
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
		div_msg_loopExeStartTime.style.display = "none";
		div_msg_loopExeEndTime.style.display = "none";
		div_msg_repeatExeIntervalTime.style.display = "none";
	}else if(executeMode1.value=="1"){//循环执行
		//固定执行时间
		triggerTime1.style.display = "none";
		triggerTime1.value = "";
		triggerTime2.style.display = "";
		span_triggerTime.style.display = "none";
		div_msg_triggerTime.style.display = "none";
		div_msg_triggerTime.innerHTML = "";
		//循环执行时间
		loopExeStartTime1.style.display = "";
		loopExeEndTime1.style.display = "";
		loopExeStartTime2.style.display = "none";
		loopExeEndTime2.style.display = "none";
		span_loopExeTime.style.display = "";
		//循环执行间隔时间
		repeatExeIntervalTime1.style.display = "";
		repeatExeIntervalTime2.style.display = "none";
		span_repeatExeIntervalTime.style.display = "";
		
		div_msg_loopExeStartTime.style.display = "";
		div_msg_loopExeEndTime.style.display = "";
		div_msg_repeatExeIntervalTime.style.display = "";
	}
	if(div_msg_triggerTime.innerHTML == ""){
		div_msg_triggerTime.style.display = "none";
	}
	if(div_msg_loopExeStartTime.innerHTML == ""){
		div_msg_loopExeStartTime.style.display = "none";
	}
	if(div_msg_loopExeEndTime.innerHTML == ""){
		div_msg_loopExeEndTime.style.display = "none";
	}
	if(div_msg_repeatExeIntervalTime.innerHTML == ""){
		div_msg_repeatExeIntervalTime.style.display = "none";
	}
}