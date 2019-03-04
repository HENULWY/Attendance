document.write('<iframe id=CalFrame name=CalFrame frameborder=0 src=./calendar.htm style=display:none;position:absolute;z-index:100></iframe>');

function menu_displayOrder_sector(){
	var cf0=document.getElementById("masterAutoMakeEditForm:displayOrder");
	if((/[^\d]/g.test(cf0.value))){
		cf0.value = cf0.value.replace(/[^\d]/g,'');
		alert("显示顺序只能为数字！");
		cf0.focus();
	}
}

function js_isYeZi(){
	if(document.getElementById("masterAutoMakeEditForm:haveMenuData").checked){
		var cf4=document.getElementById("menuNameTr");
		cf4.style.display="";
		var cf5=document.getElementById("menuLevelTr");
		cf5.style.display="";
		var cf6=document.getElementById("parentsIdTr");
		cf6.style.display="";
		var cf7=document.getElementById("displayOrderTr");
		cf7.style.display="";
		document.getElementById("masterAutoMakeEditForm:menuName").required="true";
	}else{
		var cf1=document.getElementById("menuNameTr");
		cf1.style.display="none";
		var cf2=document.getElementById("menuLevelTr");
		cf2.style.display="none";
		var cf3=document.getElementById("parentsIdTr");
		cf3.style.display="none";
		var cf8=document.getElementById("displayOrderTr");
		cf8.style.display="none";
		document.getElementById("masterAutoMakeEditForm:menuName").required="";
	}
}

