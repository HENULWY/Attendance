//�����λ�����Զ�������һ���ı���
function set(e){
  if(e.value.length >= 8){
  	var obj = document.all.tags("input");
  	for(var i=0; i<obj.length; i++){
  		if(obj[i].type == "text" && obj[i] == e){
			for(var j=i+1; j<obj.length; j++){
  				if(obj[j].type == "text"){
  					obj[j].focus();
 					break;
  				}
  			}
  			break;
  		}
  	}
  	e.value = e.value.substring(0,9);
  }
}
//��֤�̶�ִ��ʱ���Ƿ���HH:mm:ss��ʽ
function timer_check_tiggerTime(item_id){
	var item = document.getElementById(item_id);
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//�̶�ִ��ʱ��
	if(item.value!=""){
		item.value = item.value.replace(" ","");
		if(item.value.indexOf(":")==-1){
			div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
			div_msg_triggerTime.style.display = "";
			return;
		}
		if(item.value.indexOf(";")!=-1){
			var timeArray = item.value.split(";");
			for(var i = 0;i<timeArray.length;i++){
				if(timeArray[i]==""&&i!=timeArray.length-1&&timeArray[i].length<8){
					div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
					div_msg_triggerTime.style.display = "";
					return;
				}
				if(timeArray[i]==""&&i!=timeArray.length-1){
					item.value = item.value.substring(0,timeArray.length-1);
				}
				if(timeArray[i].indexOf(":")==-1){
					div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
					div_msg_triggerTime.style.display = "";
					return;
				}
				if(timeArray[i].indexOf(":")!=2||timeArray[i].lastIndexOf(":")!=5){
					div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
					div_msg_triggerTime.style.display = "";
					return;
				}
				var h = timeArray[i].substring(0,timeArray[i].indexOf(":"));
				var m = timeArray[i].substring(timeArray[i].indexOf(":")+1,timeArray[i].lastIndexOf(":"));
				var s = timeArray[i].substring(timeArray[i].lastIndexOf(":")+1);
				if((/[^\d]/g.test(h))||(/[^\d]/g.test(m))||(/[^\d]/g.test(s))){
					div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
					div_msg_triggerTime.style.display = "";
					return;
				}
				var h1 = parseInt(h);
				var m1 = parseInt(m);
				var s1 = parseInt(s);
				if(h1<0||h1>23 || m1<0||m1>59 || s1<0||s1>59){
					div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ���ʽ����ȷ��";
					div_msg_triggerTime.style.display = "";
					return;
				}
			}
		}
	}else{
		div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ�䲻��Ϊ�ա�";
		div_msg_triggerTime.style.display = "";
		return;
	}
	div_msg_triggerTime.innerHTML = "";
	div_msg_triggerTime.style.display = "none";
}
function timer_check_time1(item_id){
	var item = document.getElementById(item_id);
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//ѭ��ִ��ʱ��  ��ʼ
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//ѭ��ִ��ʱ��  ����
	if(item.value!=""){
		item.value = item.value.replace(" ","");
		if(item.value.indexOf(":")==-1){
			if(item_id=="MasterTimerEditForm:loopExeStartTime1"){
				div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}else if(item_id=="MasterTimerEditForm:loopExeEndTime1"){
				div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}
		}
		if(item.value.indexOf(":")!=2||item.value.lastIndexOf(":")!=5){
			if(item_id=="MasterTimerEditForm:loopExeStartTime1"){
				div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}else if(item_id=="MasterTimerEditForm:loopExeEndTime1"){
				div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}
		}
		var h = item.value.substring(0,item.value.indexOf(":"));
		var m = item.value.substring(item.value.indexOf(":")+1,item.value.lastIndexOf(":"));
		var s = item.value.substring(item.value.lastIndexOf(":")+1);
		if((/[^\d]/g.test(h))||(/[^\d]/g.test(m))||(/[^\d]/g.test(s))){
			if(item_id=="MasterTimerEditForm:loopExeStartTime1"){
				div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}else if(item_id=="MasterTimerEditForm:loopExeEndTime1"){
				div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}
		}
		var h1 = parseInt(h);
		var m1 = parseInt(m);
		var s1 = parseInt(s);
		if(h1<0||h1>23 || m1<0||m1>59 || s1<0||s1>59){
			if(item_id=="MasterTimerEditForm:loopExeStartTime1"){
				div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}else if(item_id=="MasterTimerEditForm:loopExeEndTime1"){
				div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ���ʽ����ȷ��";
				div_msg_loopExeStartTime.style.display = "";
				return false;
			}
		}
	}else{
		if(item_id=="MasterTimerEditForm:loopExeStartTime1"){
			item.value = "00:00:00";
		}else if(item_id=="MasterTimerEditForm:loopExeEndTime1"){
			item.value = "23:59:59";
		}
	}
	//div_msg_loopExeEndTime.innerHTML = "";
	//div_msg_loopExeStartTime.style.display = "none";
	return true;
}
function timer_check_loopExeEndTime(item_id){
	var bool = timer_check_time1(item_id);
	var item = document.getElementById(item_id);//ѭ��ִ��ʱ��  ����
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//ѭ��ִ��ʱ��  ��ʼ
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//ѭ��ִ��ʱ��  ����
	if(!bool){
		div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ���ʽ����ȷ��";
		div_msg_loopExeEndTime.style.display = "";
		return false;
	}
	var h = item.value.substring(0,item.value.indexOf(":"));
	var m = item.value.substring(item.value.indexOf(":")+1,item.value.lastIndexOf(":"));
	var s = item.value.substring(item.value.lastIndexOf(":")+1);
	var hms = parseInt(h)*3600 + parseInt(m)*60 + parseInt(s);
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");
	bool = timer_check_time1("MasterTimerEditForm:loopExeStartTime1");
	if(!bool){
		div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ���ʽ����ȷ��";
		div_msg_loopExeStartTime.style.display = "";
		return false;
	}
	var h2 = loopExeStartTime1.value.substring(0,loopExeStartTime1.value.indexOf(":"));
	var m2 = loopExeStartTime1.value.substring(loopExeStartTime1.value.indexOf(":")+1,loopExeStartTime1.value.lastIndexOf(":"));
	var s2 = loopExeStartTime1.value.substring(loopExeStartTime1.value.lastIndexOf(":")+1);
	var hms2 = parseInt(h2)*3600 + parseInt(m2)*60 + parseInt(s2);
	if(hms<hms2){
		div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ�䲻��С�ڿ�ʼʱ�䡣";
		div_msg_loopExeEndTime.style.display = "";
		return false;
	}
	div_msg_loopExeStartTime.innerHTML = "";
	div_msg_loopExeStartTime.style.display = "none";
	div_msg_loopExeEndTime.innerHTML = "";
	div_msg_loopExeEndTime.style.display = "none";
	return true;
}
function timer_check_repeatExeIntervalTime(){
	var loopExeStartTime1 = document.getElementById("MasterTimerEditForm:loopExeStartTime1");
	var loopExeEndTime1 = document.getElementById("MasterTimerEditForm:loopExeEndTime1");
	var repeatExeIntervalTime1 = document.getElementById("MasterTimerEditForm:repeatExeIntervalTime1");
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//ѭ��ִ�м��ʱ��
	if((/[^\d]/g.test(repeatExeIntervalTime1.value))){
		repeatExeIntervalTime1.value = repeatExeIntervalTime1.value.replace(/[^\d]/g,'');
		div_msg_repeatExeIntervalTime.innerHTML = "��ѭ��ִ�м��ʱ��ֻ���������֡�";
		div_msg_repeatExeIntervalTime.style.display = "";
		return;
	}
	var bool = timer_check_loopExeEndTime("MasterTimerEditForm:loopExeEndTime1");
	if(!bool){
		div_msg_loopExeEndTime.innerHTML = "����������ȷ��ѭ��ִ��ʱ�䡣";
		div_msg_loopExeEndTime.style.display = "";
		return;
	}else{
		var sh = parseInt(loopExeStartTime1.value.substring(0,loopExeStartTime1.value.indexOf(":")));
		var sm = parseInt(loopExeStartTime1.value.substring(loopExeStartTime1.value.indexOf(":")+1,loopExeStartTime1.value.lastIndexOf(":")));
		var ss = parseInt(loopExeStartTime1.value.substring(loopExeStartTime1.value.lastIndexOf(":")+1));
		var eh = parseInt(loopExeEndTime1.value.substring(0,loopExeEndTime1.value.indexOf(":")));
		var em = parseInt(loopExeEndTime1.value.substring(loopExeEndTime1.value.indexOf(":")+1,loopExeEndTime1.value.lastIndexOf(":")));
		var es = parseInt(loopExeEndTime1.value.substring(loopExeEndTime1.value.lastIndexOf(":")+1));
		var start = sh*3600 + sm*60 + ss;
		var end = eh*3600 + em*60 + es;
		if(start>end){
			div_msg_repeatExeIntervalTime.innerHTML = "����������ȷ��ѭ��ִ��ʱ�䡣";
			div_msg_repeatExeIntervalTime.style.display = "";
			return;
		}
		if((end-start)<parseInt(repeatExeIntervalTime1.value)){
			div_msg_repeatExeIntervalTime.innerHTML = "��ѭ��ִ�м��ʱ�䲻�ܴ���ѭ��ִ��ʱ�䷶Χ��";
			div_msg_repeatExeIntervalTime.style.display = "";
			return;
		}
	}
	if(parseInt(repeatExeIntervalTime1.value)>=86400){
		div_msg_repeatExeIntervalTime.innerHTML = "��ѭ��ִ�м��ʱ�䲻�ܴ���һ��(86400��)��";
		div_msg_repeatExeIntervalTime.style.display = "";
		return;
	}
	div_msg_repeatExeIntervalTime.innerHTML = "";
	div_msg_repeatExeIntervalTime.style.display = "none";
}
function timer_check_description(item_id){
	var item = document.getElementById(item_id);//����
	var div_msg_description = document.getElementById("div_msg_description");//����
	if(item.value.length>250){
		div_msg_description.innerHTML = "��������󳤶Ȳ��ܳ���250��";
		div_msg_description.style.display = "";
		return;
	}
	div_msg_description.innerHTML = "";
	div_msg_description.style.display = "none";
}
function timer_commit(){
	var taskName = document.getElementById("MasterTimerEditForm:taskName");//������
	var taskType = document.getElementById("MasterTimerEditForm:taskType");//��������
	var taskEffectiveDate = document.getElementById("MasterTimerEditForm:taskEffectiveDate");//������Ч����
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
	var logic = document.getElementById("MasterTimerEditForm:logic");//����ҵ���߼�
	var description = document.getElementById("MasterTimerEditForm:description");//����
	
	var div_msg_taskName = document.getElementById("div_msg_taskName");//������
	var div_msg_taskEffectiveDate = document.getElementById("div_msg_taskEffectiveDate");//������Ч����
	var div_msg_taskIneffectiveDate = document.getElementById("div_msg_taskIneffectiveDate");//����ʧЧ����
	var div_msg_triggerTime = document.getElementById("div_msg_triggerTime");//�̶�ִ��ʱ��
	var div_msg_loopExeStartTime = document.getElementById("div_msg_loopExeStartTime");//ѭ��ִ��ʱ��  ��ʼ
	var div_msg_loopExeEndTime = document.getElementById("div_msg_loopExeEndTime");//ѭ��ִ��ʱ��  ����
	var div_msg_repeatExeIntervalTime = document.getElementById("div_msg_repeatExeIntervalTime");//ѭ��ִ�м��ʱ��
	var div_msg_logic = document.getElementById("div_msg_logic");//����ҵ���߼�
	var div_msg_description = document.getElementById("div_msg_description");//����
	if(taskName.value.replace(" ","")==""){
		div_msg_taskName.innerHTML = "������������Ϊ�ա�";
		div_msg_taskName.style.display = "";
	}else{
		div_msg_taskName.innerHTML = "";
		div_msg_taskName.style.display = "none";
	}
	if(taskEffectiveDate.value.replace(" ","")==""){
		div_msg_taskEffectiveDate.innerHTML = "��������Ч���ڲ���Ϊ�ա�";
		div_msg_taskEffectiveDate.style.display = "";
	}else{
		div_msg_taskEffectiveDate.innerHTML = "";
		div_msg_taskEffectiveDate.style.display = "none";
	}
	var bool = timer_check_taskIneffectiveDate();
	if(!bool){
		div_msg_taskIneffectiveDate.innerHTML = "������ʧЧ���ڲ���С����Ч���ڡ�";
		div_msg_taskIneffectiveDate.style.display = "";
	}else{
		div_msg_taskIneffectiveDate.innerHTML = "";
		div_msg_taskIneffectiveDate.style.display = "none";
	}
	if(taskType.value=="0"&&triggerTime1.value==""){
		div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ�䲻��Ϊ�ա�";
		div_msg_triggerTime.style.display = "";
	}
	if(taskType.value!="0"){
		if(executeMode1.value=="0"&&triggerTime1.value==""){
			div_msg_triggerTime.innerHTML = "��̶�ִ��ʱ�䲻��Ϊ�ա�";
			div_msg_triggerTime.style.display = "";
		}else if(executeMode1.value=="1"&&(loopExeStartTime1.value=="")){
			div_msg_loopExeStartTime.innerHTML = "��ѭ��ִ�п�ʼʱ�䲻��Ϊ�ա�";
			div_msg_loopExeStartTime.style.display = "";
		}else if(executeMode1.value=="1"&&(loopExeEndTime1.value=="")){
			div_msg_loopExeEndTime.innerHTML = "��ѭ��ִ�н���ʱ�䲻��Ϊ�ա�";
			div_msg_loopExeEndTime.style.display = "";
		}
	}
	if(logic.value.replace(" ","")==""){
		div_msg_logic.innerHTML = "�ﴥ��ҵ���߼�����Ϊ�ա�";
		div_msg_logic.style.display = "";
	}else{
		div_msg_logic.innerHTML = "";
		div_msg_logic.style.display = "none";
	}
	if(description.value.length>250){
		div_msg_description.innerHTML = "��������󳤶Ȳ��ܳ���250��";
	}else{
		div_msg_description.innerHTML = "";
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
	if(div_msg_taskName.innerHTML!=""||div_msg_taskEffectiveDate.innerHTML!=""||div_msg_taskIneffectiveDate.innerHTML!=""||div_msg_triggerTime.innerHTML!=""
		||div_msg_loopExeStartTime.innerHTML!=""||div_msg_loopExeEndTime.innerHTML!=""||div_msg_repeatExeIntervalTime.innerHTML!=""
		||div_msg_logic.innerHTML!=""||div_msg_description.innerHTML!=""){
		return false;
	}
}
function timer_check_taskName(){
	var div_msg_taskName = document.getElementById("div_msg_taskName");//������
	var taskName = document.getElementById("MasterTimerEditForm:taskName");
	if(taskName.value.replace(" ","")==""){
		div_msg_taskName.innerHTML = "������������Ϊ�ա�";
		div_msg_taskName.style.display = "";
	}else{
		div_msg_taskName.innerHTML = "";
		div_msg_taskName.style.display = "none";
	}
}
function timer_check_taskEffectiveDate(){
	var div_msg_taskEffectiveDate = document.getElementById("div_msg_taskEffectiveDate");//������Ч����
	var taskEffectiveDate = document.getElementById("MasterTimerEditForm:taskEffectiveDate");
	var div_msg_taskIneffectiveDate = document.getElementById("div_msg_taskIneffectiveDate");
	if(taskEffectiveDate.value.replace(" ","")==""){
		div_msg_taskEffectiveDate.innerHTML = "��������Ч���ڲ���Ϊ�ա�";
		div_msg_taskEffectiveDate.style.display = "";
	}else{
		div_msg_taskEffectiveDate.innerHTML = "";
		div_msg_taskEffectiveDate.style.display = "none";
	}
}
function timer_check_logic(){
	var div_msg_logic = document.getElementById("div_msg_logic");//������
	var logic = document.getElementById("MasterTimerEditForm:logic");
	if(logic.value.replace(" ","")==""){
		div_msg_logic.innerHTML = "�ﴥ��ҵ���߼�����Ϊ�ա�";
		div_msg_logic.style.display = "";
	}else{
		div_msg_logic.innerHTML = "";
		div_msg_logic.style.display = "none";
	}
}
function timer_check_taskIneffectiveDate(){
	var taskEffectiveDate = document.getElementById("MasterTimerEditForm:taskEffectiveDate");//����ʧЧ����
	var taskIneffectiveDate1 = document.getElementById("MasterTimerEditForm:taskIneffectiveDate1");//����ʧЧ����
	var div_msg_taskIneffectiveDate = document.getElementById("div_msg_taskIneffectiveDate");
	if(taskEffectiveDate.value!=""&&taskIneffectiveDate1.value!=""){
		var y1 = parseInt(taskEffectiveDate.value.substring(0,taskEffectiveDate.value.indexOf("-")));
		var y2 = parseInt(taskIneffectiveDate1.value.substring(0,taskIneffectiveDate1.value.indexOf("-")));
		var m1 = parseInt(taskEffectiveDate.value.substring(taskEffectiveDate.value.indexOf("-")+1,taskEffectiveDate.value.lastIndexOf("-")));
		var m2 = parseInt(taskIneffectiveDate1.value.substring(taskIneffectiveDate1.value.indexOf("-")+1,taskIneffectiveDate1.value.lastIndexOf("-")));
		var d1 = parseInt(taskEffectiveDate.value.substring(taskEffectiveDate.value.lastIndexOf("-")+1));
		var d2 = parseInt(taskIneffectiveDate1.value.substring(taskIneffectiveDate1.value.lastIndexOf("-")+1));
		if(y1>y2){
			div_msg_taskIneffectiveDate.innerHTML = "������ʧЧ���ڲ���С����Ч���ڡ�";
			div_msg_taskIneffectiveDate.style.display = "";
			return false;
		}else if(y1==y2){
			if(m1>m2){
				div_msg_taskIneffectiveDate.innerHTML = "������ʧЧ���ڲ���С����Ч���ڡ�";
				div_msg_taskIneffectiveDate.style.display = "";
				return false;
			}else if(m1==m2){
				if(d1>d2){
					div_msg_taskIneffectiveDate.innerHTML = "������ʧЧ���ڲ���С����Ч���ڡ�";
					div_msg_taskIneffectiveDate.style.display = "";
					return false;
				}
			}else if(m1<m2){
				
			}
		}else if(y1<y2){
			
		}
	}
	div_msg_taskIneffectiveDate.innerHTML = "";
	div_msg_taskIneffectiveDate.style.display = "none";
	return true;
}