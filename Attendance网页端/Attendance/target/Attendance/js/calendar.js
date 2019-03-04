document.write('<iframe id=CalFrame name=CalFrame frameborder=0 src=./calendar.htm style=display:none;position:absolute;z-index:100></iframe>');
document.onclick=hideCalendar;

function showCalendar(sImg,bOpenBound,sFld1,sFld2,sCallback)
{
	var fld1,fld2;
	var cf=document.getElementById("CalFrame");
	var wcf=window.frames.CalFrame;
	var oImg=document.getElementById(sImg);
	if(!oImg){alert("控制器不存在");return;}
	if(!sFld1){alert("请指定入力控制");return;}
	fld1=document.getElementById(sFld1);
	if(!fld1){alert("入力控制不存在.");return;}
	if(fld1.tagName!="INPUT"||fld1.type!="text"){alert("input object type error.");return;}
	if(sFld2)
	{
		fld2=document.getElementById(sFld2);
		if(!fld2){alert("参考入力控制不存在.");return;}
		if(fld2.tagName!="INPUT"||fld2.type!="text"){alert("sannkou kontororu taipu .");return;}
	}

	if(!wcf.bCalLoaded){alert("取不到日历.请按F5.");return;}
	if(cf.style.display=="block"){cf.style.display="none";return;}
	
	var eT=0,eL=0,p=oImg;
	var sT=document.body.scrollTop,sL=document.body.scrollLeft;
	var eH=oImg.height,eW=oImg.width;
	while(p&&p.tagName!="BODY"){
		eT+=p.offsetTop;
		eL+=p.offsetLeft;
		p=p.offsetParent;
	}
//		alert(" document.body.clientHeight = " + document.body.clientHeight);
//	alert(" window.event.screenY = " + window.event.screenY);
//	alert(" cf.height = " + cf.height);
//	if(window.event.screenY < cf.height){
//		cf.style.top=eT+eH;
//	}else{
//		cf.style.top=eT-cf.height;
//	}	
	if(document.body.clientHeight > 640){
		cf.style.top=(document.body.clientHeight-(eT-sT)-eH>=cf.height)?eT+eH:eT-cf.height;
	}else{
		cf.style.top=eT+eH;
	}
//	cf.style.top=(document.body.clientHeight-(eT-sT)-eH>=cf.height)?eT+eH:eT-cf.height;
	cf.style.left=(document.body.clientWidth-(eL-sL)>=cf.width)?eL:eL+eW-cf.width;
	cf.style.display="block";
	
	wcf.openbound=bOpenBound;
	wcf.fld1=fld1;
	wcf.fld2=fld2;
	wcf.callback=sCallback;
	wcf.initCalendar();
}
function hideCalendar()
{
	var cf=document.getElementById("CalFrame");
	cf.style.display="none";
}
function js_isYeZi(){
	var cf = document.getElementById("menuEditForm:isYeZi");
//	alert(cf.value);
	if(cf.value == "Y"){
		var cf4=document.getElementById("yeMianTr");
		cf4.style.display="";
		var cf5=document.getElementById("beanNameTr");
		cf5.style.display="";
		var cf6=document.getElementById("methodNameTr");
		cf6.style.display="";
	}else{
		var cf1=document.getElementById("yeMianTr");
		cf1.style.display="none";
		var cf2=document.getElementById("beanNameTr");
		cf2.style.display="none";
		var cf3=document.getElementById("methodNameTr");
		cf3.style.display="none";
		var cf7 = document.getElementById("menuEditForm:yeMianName");
		cf7.value = "";
		var cf8 = document.getElementById("menuEditForm:beanName");
		cf8.value = "";
		var cf9 = document.getElementById("menuEditForm:methodName");
		cf9.value = "";
	}
}
//暂没用
function xuanZe1(){
		var cf1=document.getElementById("yeMianTr");
		cf1.style.display="none";
		var cf2=document.getElementById("beanNameTr");
		cf2.style.display="none";
		var cf3=document.getElementById("methodNameTr");
		cf3.style.display="none";
}
//暂没用
function xuanZe(){
		var cf3=document.getElementById("yeMianTr");
		cf3.style.display="";
		var cf4=document.getElementById("beanNameTr");
		cf4.style.display="";
		var cf5=document.getElementById("methodNameTr");
		cf5.style.display="";
}
function yeMianTrJs(){
		var cf3=document.getElementById("menuEditForm:yeMianName");
		if(cf3.value == ""|cf3.value==null){
			alert("页面名不能为空!");
			document.getElementById("menuEditForm:yeMianName").focus();
		}
}
function beanNameTrJs(){
		var cf3=document.getElementById("menuEditForm:beanName");
		if(cf3.value == ""|cf3.value==null){
			alert("bean名不为空!");
//			document.getElementById("menuEditForm:beanName").focus();
		}
}
function methodNameTrJs(){
		var cf3=document.getElementById("menuEditForm:methodName");
		if(cf3.value == ""|cf3.value==null){
			alert("方法名不为空!");
//			document.getElementById("menuEditForm:methodName").focus();
		}
}
function submitTrJs(){
	var cf4=document.getElementById("menuEditForm:menuName");
	if(cf4.value == ""|cf4.value==null){
		alert("菜单名称不能为空!");
		return false;
	}
	var cf = document.getElementById("menuEditForm:isYeZi");
	if(cf.value == "Y"){
		var reg = /^[u4E00-u9FA5]+$/;
		var cf1=document.getElementById("menuEditForm:yeMianName");
		if(cf1.value == ""|cf1.value==null){
			alert("页面名不能为空!");
			return false;
		}
      	if(!reg.test(cf1.value)){
      		cf1.value = '';
      		alert("页面名不能为中文!");
       		return false;
      	}
		var cf2=document.getElementById("menuEditForm:beanName");
		if(cf2.value == ""|cf2.value==null){
			alert("bean名不为空!");
			return false;
		}
		if(!reg.test(cf2.value)){
			cf2.value = '';
      		alert("bean名不能为中文!");
       		return false;
      	}
		var cf3=document.getElementById("menuEditForm:methodName");
		if(cf3.value == ""|cf3.value==null){
			alert("方法名不为空!");
			return false;
		}
	//	if(!reg.test(cf3.value)){
//			cf3.value = '';
//      		alert("方法名不能为中文!");
//       		return false;
//      	}	
	}
	return true;
}


function menu_displayOrder(displayOrder){
	var cf1=document.getElementById(displayOrder);
	if((/[^\d]/g.test(cf1.value))){
		cf1.value = cf1.value.replace(/[^\d]/g,'');
		alert("显示顺序只能为数字！");
		cf1.focus();
	}
}
function checkDate(date) 
{ 
	return true; 
}
//角色描述
function js_role_miaoShu(){
	var cf1=document.getElementById("adminMasterRoleList:miaoShu");
	if(cf1.value.length >= 255){
		alert("角色描述不能超过255个字符！");
	}
}
//岗位描述
function js_position_miaoShu(){
	var cf1=document.getElementById("adminMasterPositionList:miaoShu");
	if(cf1.value.length >= 255){
		alert("岗位描述不能超过255个字符！");
	}
}
//全选--全不选
var backup;
var k=0;
function SetCheckedAll(form)
{
    var oTable=document.all[form+':data'];
    var oChkAll=document.all[form+':selectall'];
    var reposition=document.all[form+':reposition'];
    reposition.checked=false;
    //备份
    if(oTable != null)
    {
    	if(k==0)
    	{
    		backup=new Array(oTable.rows.length);
	    	for(j=0;j<oTable.rows.length;j++)
	        {
	           backup[j]=oTable.rows(j).cells(0).children.item(0).checked;
	        }
	    	k=1;
    	}
    }
    //全选--全不选
    if(oTable != null && oChkAll != null)
    {
        for(j=0;j<oTable.rows.length;j++)
        {
           oTable.rows(j).cells(0).children.item(0).checked=oChkAll.checked;
        }
    }
}
//复位
function Reposition(form)
{
	var oTable=document.all[form+':data'];
	var reposition=document.all[form+':reposition'];
	var oChkAll=document.all[form+':selectall'];
	oChkAll.checked=false;
	if(oTable != null && backup != null)
    {
        for(j=0;j<oTable.rows.length;j++)
        {
           	oTable.rows(j).cells(0).children.item(0).checked=backup[j];
        }
    }
}
//master_chanpinruku_detail.jsp
function detailRuKu(){
	var cf = document.getElementById("MasterChanPinRuKuDetailForm:ruKuFlag");
	if(cf.value == "1"){
		var cf1=document.getElementById("ruKu1");
		cf1.style.display="";
		var cf1=document.getElementById("ruKu2");
		cf1.style.display="";
		var cf2=document.getElementById("canKu");
		cf2.style.display="";
	}
	if(cf.value == "2"){
		var cf1=document.getElementById("ruKu1");
		cf1.style.display="none";
		var cf1=document.getElementById("ruKu2");
		cf1.style.display="none";
		var cf2=document.getElementById("canKu");
		cf2.style.display="none";
	}
}


