function timer_select_executeMode(){
	var executeMode1 = document.getElementById("MasterTimerEditForm:executeMode1");//ִ�з�ʽ1
	var triggerTime1 = document.getElementById("MasterTimerEditForm:triggerTime1");//�̶�ִ��ʱ��1
	var triggerTime2 = document.getElementById("MasterTimerEditForm:triggerTime2");//�̶�ִ��ʱ��2
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");//ѭ��ִ��ʱ��  ��ʼ1
	var loopExeStartTime2 = document.getElementById("MasterTimerEditForm:loopExeStartTime2");//ѭ��ִ��ʱ��  ��ʼ2
	var loopExeEndTime1 = document.getElementById("MasterTimerEditForm:loopExeEndTime1");//ѭ��ִ��ʱ��  ����1
	var loopExeEndTime2= document.getElementById("MasterTimerEditForm:loopExeEndTime2");//ѭ��ִ��ʱ��  ����2
	var repeatExeIntervalTime1 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime1");//ѭ��ִ�м��ʱ��1
	var repeatExeIntervalTime2 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime2");//ѭ��ִ�м��ʱ��2
	var span_loopExeTime = document.getElementById("span_loopExeTime");//ѭ��ִ��ʱ�� *
	var span_repeatExeIntervalTime = document.getElementById("span_repeatExeIntervalTime");//ѭ��ִ�м��ʱ�� *
	
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//�̶�ִ��ʱ��
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//ѭ��ִ��ʱ��  ��ʼ
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//ѭ��ִ��ʱ��  ����
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//ѭ��ִ�м��ʱ��
	
	//---------------------ִ�з�ʽ------------------------------
	if(executeMode1.value=="0"){//�̶�ʱ��ִ��
		//�̶�ִ��ʱ��
		triggerTime1.style.display = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
		div_msg_triggerTime.style.display = "";
		//ѭ��ִ��ʱ��
		loopExeStartTime1.style.display = "none";
		loopExeStartTime1.value = "";
		loopExeEndTime1.style.display = "none";
		loopExeEndTime1.value = "";
		loopExeStartTime2.style.display = "";
		loopExeEndTime2.style.display = "";
		span_loopExeTime.style.display = "none";
		//ѭ��ִ�м��ʱ��
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
	}else if(executeMode1.value=="1"){//ѭ��ִ��
		//�̶�ִ��ʱ��
		triggerTime1.style.display = "none";
		triggerTime1.value = "";
		triggerTime2.style.display = "";
		span_triggerTime.style.display = "none";
		div_msg_triggerTime.style.display = "none";
		div_msg_triggerTime.innerHTML = "";
		//ѭ��ִ��ʱ��
		loopExeStartTime1.style.display = "";
		loopExeEndTime1.style.display = "";
		loopExeStartTime2.style.display = "none";
		loopExeEndTime2.style.display = "none";
		span_loopExeTime.style.display = "";
		//ѭ��ִ�м��ʱ��
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