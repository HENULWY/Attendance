function timer_select_taskType(){
	var taskType = document.getElementById("MasterTimerEditForm:taskType");//��������
	var taskTypePeriod1 = document.getElementById("MasterTimerEditForm:taskTypePeriod1");//������������1
	var taskTypePeriod2 = document.getElementById("MasterTimerEditForm:taskTypePeriod2");//������������2
	var taskTypePeriod3 = document.getElementById("MasterTimerEditForm:taskTypePeriod3");//������������3
	var taskTypePeriod4 = document.getElementById("MasterTimerEditForm:taskTypePeriod4");//������������4
	var taskIneffectiveDate1 = document.getElementById("MasterTimerEditForm:taskIneffectiveDate1");//����ʧЧ����1
	var taskIneffectiveDate2 = document.getElementById("MasterTimerEditForm:taskIneffectiveDate2");//����ʧЧ����2
	var executeMode1 = document.getElementById("MasterTimerEditForm:executeMode1");//ִ�з�ʽ1
	var executeMode2 = document.getElementById("MasterTimerEditForm:executeMode2");//ִ�з�ʽ2
	var triggerTime1 = document.getElementById("MasterTimerEditForm:triggerTime1");//�̶�ִ��ʱ��1
	var triggerTime2 = document.getElementById("MasterTimerEditForm:triggerTime2");//�̶�ִ��ʱ��2
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");//ѭ��ִ��ʱ��  ��ʼ1
	var loopExeStartTime2 = document.getElementById("MasterTimerEditForm:loopExeStartTime2");//ѭ��ִ��ʱ��  ��ʼ2
	var loopExeEndTime1 = document.getElementById("MasterTimerEditForm:loopExeEndTime1");//ѭ��ִ��ʱ��  ����1
	var loopExeEndTime2= document.getElementById("MasterTimerEditForm:loopExeEndTime2");//ѭ��ִ��ʱ��  ����2
	var repeatExeIntervalTime1 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime1");//ѭ��ִ�м��ʱ��1
	var repeatExeIntervalTime2 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime2");//ѭ��ִ�м��ʱ��2
	
	var span_triggerTime = document.getElementById("span_triggerTime");//�̶�ִ��ʱ�� *
	var span_loopExeTime = document.getElementById("span_loopExeTime");//ѭ��ִ��ʱ�� *
	var span_repeatExeIntervalTime = document.getElementById("span_repeatExeIntervalTime");//ѭ��ִ�м��ʱ�� *
	
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//�̶�ִ��ʱ��
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//ѭ��ִ��ʱ��  ��ʼ
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//ѭ��ִ��ʱ��  ����
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//ѭ��ִ�м��ʱ��
	
	//---------------------��������------------------------------
	if(taskType.value=="0"){//һ��������
		//������������
		taskTypePeriod1.style.display = "none";
		taskTypePeriod1.options[0].selected = true;
		taskTypePeriod2.style.display = "";
		taskTypePeriod2.options[0].selected = true;
		taskTypePeriod3.style.display = "none";
		taskTypePeriod3.options[0].selected = true;
		taskTypePeriod4.style.display = "none";
		taskTypePeriod4.options[0].selected = true;
		//����ʧЧ����
		taskIneffectiveDate1.style.display = "none";
		taskIneffectiveDate1.value = "";
		taskIneffectiveDate2.style.display = "";
		taskIneffectiveDate2.value = "";
		//ִ�з�ʽ
		executeMode1.style.display = "none";
		executeMode1.options[0].selected = true;
		executeMode2.style.display = "";
		executeMode2.options[0].selected = true;
		//�̶�ִ��ʱ��
		triggerTime1.style.display = "";
		triggerTime1.value = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
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
	}else{
		if(taskType.value=="1"){//ÿ��
			//������������
			taskTypePeriod1.style.display = "none";
			taskTypePeriod1.options[0].selected = true;
			taskTypePeriod2.style.display = "";
			taskTypePeriod3.style.display = "none";
			taskTypePeriod3.options[0].selected = true;
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}else if(taskType.value=="2"){//ÿ��
			//������������
			taskTypePeriod1.style.display = "";
			taskTypePeriod2.style.display = "none";
			taskTypePeriod2.options[0].selected = true;
			taskTypePeriod3.style.display = "none";
			taskTypePeriod3.options[0].selected = true;
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}else if(taskType.value=="3"){//ÿ��
			//������������
			taskTypePeriod1.style.display = "none";
			taskTypePeriod1.options[0].selected = true;
			taskTypePeriod2.style.display = "none";
			taskTypePeriod2.options[0].selected = true;
			taskTypePeriod3.style.display = "";
			taskTypePeriod4.style.display = "none";
			taskTypePeriod4.options[0].selected = true;
		}
		
		//����ʧЧ����
		taskIneffectiveDate1.style.display = "";
		taskIneffectiveDate2.style.display = "none";
		taskIneffectiveDate2.value = "";
		//ִ�з�ʽ
		executeMode1.style.display = "";
		executeMode2.style.display = "none";
		executeMode2.options[0].selected = true;
		//�̶�ִ��ʱ��
		triggerTime1.style.display = "";
		triggerTime2.style.display = "none";
		span_triggerTime.style.display = "";
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