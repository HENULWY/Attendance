//import java.util.ArrayList;
	var _xmlHttpRequestObj;
	//window.onload=function(){
	//}
	//selectOneMenuId:include formId (example: formId:TagId)
	 function ChangeSelectRefertoColumnByClassId(item_id) {
    	var lineNo = item_id.substr(35,item_id.length-55);
    	var selectOneMenuId = "FastFrmFormEditForm:formCloumnList_" + lineNo + ":referToModelClassId";
    	var subSelectId = "FastFrmFormEditForm:formCloumnList_" + lineNo + ":referToColumnId";
    	var subSelect=document.getElementById(selectOneMenuId);
    	subSelect.disabled=false;
    	document.getElementById(selectOneMenuId).disabled=false;
		var zhi=document.getElementById(selectOneMenuId).value;
		var url=getRootPathSys() + "ajaxHandlerServlet.ajax?handler=subFormColumnList&id="+encodeURIComponent(escape(zhi));
		_xmlHttpRequestObj=true;
		try {
			_xmlHttpRequestObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				_xmlHttpRequestObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				_xmlHttpRequestObj = false;
			}
		}
		if (!_xmlHttpRequestObj && typeof XMLHttpRequest!='') {
			try {
				_xmlHttpRequestObj = new XMLHttpRequest();
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}
		if (!_xmlHttpRequestObj && window.createRequest) {
			try {
				_xmlHttpRequestObj = window.createRequest();
				_xmlHttpRequestObj.overrideMimeType('text/xml');
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}

		if(_xmlHttpRequestObj) {
			_xmlHttpRequestObj.open("get",url,true);
			_xmlHttpRequestObj.onreadystatechange=function() {
		 		if(_xmlHttpRequestObj.readyState == 4) {
					if(_xmlHttpRequestObj.status == 200) {
					    parseMessageFormEdit("item", subSelectId);
					} else {
					    alert("Not able to retrieve description"+req.statusText);
					}
				}
			}
			_xmlHttpRequestObj.send(null);
		}
    }
	
	
    function ChangeSelectColumnByClassId(item_id) {
    	var lineNo = item_id.substr(37,item_id.length-50);
    	var selectOneMenuId = "FastFrmFormDetailForm:formCloumnList_" + lineNo + ":modelClassId";
    	var subSelectId = "FastFrmFormDetailForm:formCloumnList_" + lineNo + ":columnId";
		var zhi=document.getElementById(selectOneMenuId).value;
		var url=getRootPathSys() + "ajaxHandlerServlet.ajax?handler=subFormColumnList&id="+encodeURIComponent(escape(zhi));
		_xmlHttpRequestObj=true;
		try {
			_xmlHttpRequestObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				_xmlHttpRequestObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				_xmlHttpRequestObj = false;
			}
		}
		if (!_xmlHttpRequestObj && typeof XMLHttpRequest!='') {
			try {
				_xmlHttpRequestObj = new XMLHttpRequest();
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}
		if (!_xmlHttpRequestObj && window.createRequest) {
			try {
				_xmlHttpRequestObj = window.createRequest();
				_xmlHttpRequestObj.overrideMimeType('text/xml');
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}

		if(_xmlHttpRequestObj) {
			_xmlHttpRequestObj.open("get",url,true);
			_xmlHttpRequestObj.onreadystatechange=function() {
		 		if(_xmlHttpRequestObj.readyState == 4) {
					if(_xmlHttpRequestObj.status == 200) {
					    parseMessageFormEdit("item", subSelectId);
					} else {
					    alert("Not able to retrieve description"+req.statusText);
					}
				}
			}
			_xmlHttpRequestObj.send(null);
		}
    }
   
	//为下拉框设置值
	function parseMessageFormEdit(tagName, subSelectOneMenuId){
		var xmlDoc=_xmlHttpRequestObj.responseXML.documentElement;
		var xSel=xmlDoc.getElementsByTagName(tagName);
		var select_root=document.getElementById(subSelectOneMenuId);
		select_root.options.length=0;
		for(var i=0;i<xSel.length;i++){
			var xValue=xSel[i].childNodes[0].firstChild.nodeValue;
			var xText=xSel[i].childNodes[1].firstChild.nodeValue;
			try{
				select_root.options[i]=new Option(xText,xValue);
			}catch(e){
			
			}
		}
	}
	//添加选择项
	function fnAdd(oListbox, sName, sValue){
        var oOption = document.createElement("option");
        oOption.appendChild(document.createTextNode(sName));
		oOption.setAttribute("value", sValue);
        oListbox.appendChild(oOption);
    }
	//选择字段名称后，为其他一一赋值
    function ChangeValuesByColumnId(columnId) {
    	var lineNo = columnId.substr(37,columnId.length-46);
    	var modelClass_zhi = document.getElementById("FastFrmFormDetailForm:modelClassId").value;
    	var column_zhi = document.getElementById(columnId).value;
		var url=getRootPathSys() + "ajaxHandlerServlet.ajax?handler=setColumnValues&modelClassId="+encodeURIComponent(escape(modelClass_zhi))+"&columnId="+encodeURIComponent(escape(column_zhi));
		_xmlHttpRequestObj=true;
		try {
			_xmlHttpRequestObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				_xmlHttpRequestObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				_xmlHttpRequestObj = false;
			}
		}
		if (!_xmlHttpRequestObj && typeof XMLHttpRequest!='') {
			try {
				_xmlHttpRequestObj = new XMLHttpRequest();
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}
		if (!_xmlHttpRequestObj && window.createRequest) {
			try {
				_xmlHttpRequestObj = window.createRequest();
				_xmlHttpRequestObj.overrideMimeType('text/xml');
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}

		if(_xmlHttpRequestObj) {
			_xmlHttpRequestObj.open("get",url,true);
			_xmlHttpRequestObj.onreadystatechange=function() {
		 		if(_xmlHttpRequestObj.readyState == 4) {
					if(_xmlHttpRequestObj.status == 200) {
					    parseMessage(lineNo);
					} else {
					    alert("Not able to retrieve description"+_xmlHttpRequestObj.statusText);
					}
				}
			}
			_xmlHttpRequestObj.send(null);
		}
    }

//为字段各个信息框设置值
function parseMessage(targetLineNo){
	var columnType = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":columnType");
	var columnLength = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":columnLength");
	var description = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":description");
	var referToModelClassId = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":referToModelClassId");
	var referToColumnId = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":referToColumnId");
	var referName = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":referName");
	var pageInputRequired = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":inputRequired");
	var inputType = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":inputType");
	var fractionLength = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":fractionLength");
	var primarykey = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":primarykey");
	var referDisplayCol = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+targetLineNo+":referDisplayCol");
	var result = _xmlHttpRequestObj.responseText;
	if(result=="0"){
		alert("数据找不到！");
	}else{
		var values = result.split(";");
		
		if(columnType!=null)
			columnType.value = values[0];
		if(columnLength!=null)
			columnLength.value = values[1];
		if(description!=null)
			description.value = values[2];
		if(referToModelClassId!=null)
			referToModelClassId.value = values[3];
		if(referToColumnId!=null)
			referToColumnId.value = values[4];
		if(referName!=null)
			referName.value = values[5];
		if(pageInputRequired!=null)
			pageInputRequired.value = values[6];
		if(inputType!=null)
			inputType.value = values[7];
		if(fractionLength!=null)
			fractionLength.value = values[8];
		if(primarykey!=null)
			primarykey.value = values[9];
		if(referDisplayCol!=null){
			referDisplayCol.options.length=1;
			referDisplayCol.options[0]=new Option("","");
			var referList = values[10].split("*");
			if(referList!=null&&referList.length>0){
				for(var i = 1;i<referList.length-1;i++){
					var referTexVal = referList[i].split(",");
					if(referTexVal.length>0)
						referDisplayCol.options[i]=new Option(referTexVal[1],referTexVal[0]);
				}
			}
		}
	}
}
//如果没有参照表，参照显示字段就不让选择
	function setReferDisplayCol(item_id){
		var lineNo = item_id.substr(37,item_id.length-53);
    	var referToModelClassId = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+lineNo+":referToModelClassId");
    	var referDisplayCol = document.getElementById(item_id);
		if(referToModelClassId.value==null||referToModelClassId.value==''){
			for(var i = 0;i<referDisplayCol.length;i++){
				if(referDisplayCol.options[i].value==""){
					referDisplayCol.options[i].selected=true;
					break;
				}
			}
		}
	}
//如果没有参照表，参照显示字段就不让选择
	function setReferDisplayCol0(item_id){
		var lineNo = item_id.substr(37,item_id.length-53);
    	var referToModelClassId = document.getElementById("FastFrmFormDetailForm:formCloumnList_"+lineNo+":referToModelClassId");
    	var referDisplayCol = document.getElementById(item_id);
		if(referToModelClassId.value==null||referToModelClassId.value==''){
			for(var i = 0;i<referDisplayCol.length;i++){
				if(referDisplayCol.options[i].value==""){
					referDisplayCol.options[i].selected=true;
					referDisplayCol.length=1;
					break;
				}
			}
		}else{
			var url=getRootPathSys() + "ajaxHandlerServlet.ajax?handler=setReferDisplayColValues&modelClassId="+encodeURIComponent(escape(referToModelClassId.value));
			_xmlHttpRequestObj=true;
			try {
				_xmlHttpRequestObj = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					_xmlHttpRequestObj = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					_xmlHttpRequestObj = false;
				}
			}
			if (!_xmlHttpRequestObj && typeof XMLHttpRequest!='') {
				try {
					_xmlHttpRequestObj = new XMLHttpRequest();
				} catch (e) {
					_xmlHttpRequestObj=false;
				}
			}
			if (!_xmlHttpRequestObj && window.createRequest) {
				try {
					_xmlHttpRequestObj = window.createRequest();
					_xmlHttpRequestObj.overrideMimeType('text/xml');
				} catch (e) {
					_xmlHttpRequestObj=false;
				}
			}
	
			if(_xmlHttpRequestObj) {
				_xmlHttpRequestObj.open("get",url,true);
				_xmlHttpRequestObj.onreadystatechange=function() {
			 		if(_xmlHttpRequestObj.readyState == 4) {
						if(_xmlHttpRequestObj.status == 200) {
							var result = _xmlHttpRequestObj.responseText;
							if(result=="0"){
								alert("参照表不存在！");
							}else{
								var values = result.split(",");
								if(referDisplayCol!=null){
									referDisplayCol.options.length=1;
									referDisplayCol.options[0]=new Option("","");
									if(values!=null&&values.length>0){
										for(var i = 1;i<values.length-1;i++){
											var referTexVal = values[i].split(":");
											if(referTexVal.length>0)
												referDisplayCol.options[i]=new Option(referTexVal[0],referTexVal[1]);
										}
									}
								}
							}
						} else {
						    alert("Not able to retrieve description"+req.statusText);
						}
					}
				}
				_xmlHttpRequestObj.send(null);
			}
		}
	}

//获取URL
function getRootPathSys()
{
	var location=document.location;   
	var pathName=location.pathname.split("/");  
	return location.protocol+"//"+location.host+"/"+pathName[1]+"/";   
}
//全选(或全不选)
function selectedAll(checkAll_id,tab_id){
	var checkAll = document.getElementById(checkAll_id);
	var tab = document.getElementById(tab_id);
	for(var i=1;i<tab.rows.length;i++){
		if(tab.rows(i).cells(0).children.item(0)!=null)
			tab.rows(i).cells(0).children.item(0).checked=checkAll.checked;
	}
}
//数字验证
function isNumeric(item_id){
	var item_id=document.getElementById(item_id);
	if((/[^\d]/g.test(item_id.value))){
		item_id.value = '';
		alert("★长度必须是数字！");
		item_id.focus();
	}
}
//最小长度不能大于最大长度
function minMax(minLen){
	isNumeric(minLen);
	var lineNo = minLen.substr(36,minLen.length-46);
    var minL = "FastFrmFormDetailForm:valicatorList_" + lineNo + ":minLength";
    var maxL = "FastFrmFormDetailForm:valicatorList_" + lineNo + ":maxLength";
	var min=document.getElementById(minL);
	var max=document.getElementById(maxL);
	if(min.value>max.value){
		min.value = "";
		alert("最小长度不能大于最大长度！");
		min.focus();
	}else if(min.value.length>max.value.length){
		min.value = "";
		alert("最小长度不能大于最大长度！");
		min.focus();
	}
}
//检测pageId输入格式
function checkPageId(item_id){
	var pageId = document.getElementById(item_id);
	var pv = pageId.value;
	var pageIdMsg = document.getElementById("pageIdMsg");
	if(pv!=null&&pv!=""){
		//首字母只能是字母或下划线
		var headVal = pv.substr(0,1);
		if(headVal>='a'&&headVal<='z'){
			pageIdMsg.innerHTML="";
		}else if(headVal>='A'&&headVal<='Z'){
			pageIdMsg.innerHTML="";
		}else if(headVal=='_'){
			pageIdMsg.innerHTML="";
		}else{
			//alert("页面名格式不正确！");
			pageIdMsg.innerHTML="页面名格式不正确！";
			pageId.focus();
			return;
		}
		//页面名中只能由字母、数字、下划线组成
		for(var i = 1;i<pv.length;i++){
			if(pv.charAt(i)=='_'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='a'&&pv.charAt(i)<='z'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='A'&&pv.charAt(i)<='Z'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='0'&&pv.charAt(i)<='9'){
				pageIdMsg.innerHTML="";
			}else{
				//alert("页面名格式不正确！");
				pageIdMsg.innerHTML="页面名格式不正确！";
				pageId.focus();
				return;
			}
		}
		
	}else{
		pageIdMsg.innerHTML="";
	}
}

//检测pageId输入格式
function checkJSPFileName(){
	var pageId = document.getElementById("FastFrmFormEditForm:pageId");
	var pv = pageId.value;
	var pageIdMsg = document.getElementById("pageIdMsg");
	if(pv!=null&&pv!=""){
		//首字母只能是字母或下划线
		var headVal = pv.substr(0,1);
		if(headVal>='a'&&headVal<='z'){
			pageIdMsg.innerHTML="";
		}else if(headVal>='A'&&headVal<='Z'){
			pageIdMsg.innerHTML="";
		}else if(headVal=='_'){
			pageIdMsg.innerHTML="";
		}else{
			//alert("页面名格式不正确！");
			pageIdMsg.innerHTML="页面名格式不正确！";
			pageId.focus();
			return false;
		}
		//页面名中只能由字母、数字、下划线组成
		for(var i = 1;i<pv.length;i++){
			if(pv.charAt(i)=='_'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='a'&&pv.charAt(i)<='z'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='A'&&pv.charAt(i)<='Z'){
				pageIdMsg.innerHTML="";
			}else if(pv.charAt(i)>='0'&&pv.charAt(i)<='9'){
				pageIdMsg.innerHTML="";
			}else{
				//alert("页面名格式不正确！");
				pageIdMsg.innerHTML="页面名格式不正确！";
				pageId.focus();
				return false;
			}
		}
		
	}else{
		pageIdMsg.innerHTML="";
	}
	return true;
}
//如果页面类型为list，就必须是菜单;页面类型为detail，就一定不是菜单
function setIsMenu(item_id){
	var pageType = document.getElementById(item_id);
	var isMenu = document.getElementById("FastFrmFormEditForm:isMenu");
	var tr1 = document.getElementById("tr1");
	if(pageType.value=="Detail"||pageType.value==""){
		for(var i = 0;i<isMenu.length;i++){
			if(isMenu.options[i].value=="N"){
				isMenu.options[i].selected=true;
			}
		}
		tr1.style.display='none';
	}else{
		for(var i = 0;i<isMenu.length;i++){
			if(isMenu.options[i].value=="Y"){
				isMenu.options[i].selected=true;
			}
		}
		tr1.style.display='inline';
	}
}
//如果选择不是菜单(否)，则隐藏上级菜单;选择'是',则显示上级菜单
function enableParentMenu(){
	var isMenu = document.getElementById("FastFrmFormEditForm:isMenu");
	var menuName = document.getElementById("FastFrmFormEditForm:menuName");
	var parentMenu = document.getElementById("FastFrmFormEditForm:parentMenu");
	if(isMenu.options[isMenu.selectedIndex].value=="N"){
		menuName.value="";
		parentMenu.value="";
	}
}
function setMenuName(){
	var isMenu = document.getElementById("FastFrmFormEditForm:isMenu");
	var menuName = document.getElementById("FastFrmFormEditForm:menuName");
	if(isMenu.options[isMenu.selectedIndex].value=="N"){
		menuName.value="";
	}
}
function setParentMenu(){
	var isMenu = document.getElementById("FastFrmFormEditForm:isMenu");
	var parentMenu = document.getElementById("FastFrmFormEditForm:parentMenu");
	if(isMenu.options[isMenu.selectedIndex].value=="N"){
		for(var i = 0;i<parentMenu.length;i++){
			if(parentMenu.options[i].value==""){
				parentMenu.options[i].selected = true;
				break;
			}
		}
	}
}
//如果选择的model是code类型，则页面类型就不能有'详细页面'的类型
function setPageType(){
	var modelClassId = document.getElementById("FastFrmFormEditForm:modelClassId");
	var pageType = document.getElementById("FastFrmFormEditForm:pageType");
	if(modelClassId.options[modelClassId.selectedIndex].value.substr(0,4)=="Code"){
		pageType.length = 3;
	}else if(modelClassId.options[modelClassId.selectedIndex].value.substr(0,6)=="Master"){
		pageType.length = 4;
		pageType.options[3] = new Option("详细页面","Detail");
	}
}
//下拉框值为是时不能改，其他的可以改
function notChangeYes(item_id){
	var tempItem = item_id.substr(37).substr(2);
	var lineNo = item_id.substr(37,item_id.length-(37+tempItem.length+1));
	var item0 = document.getElementById("FastFrmFormDetailForm:formCloumnList_" + lineNo + ":"+tempItem+"0");
	var item = document.getElementById(item_id);
	for(var i = 0;i<item.length;i++){
		if(item.options[i].value==item0.value){
			if(item0.value=="Y"){
				item.options[i].selected=true;
			}
		}
	}
}
//如果数据库必须要求必须输入，则是否必须输入项的值必须是“是”
function notChangeOfInputRequired(item_id){
	var item = document.getElementById(item_id);
	var lineNo = item_id.substr(37,item_id.length-51);
    	var columnId = document.getElementById("FastFrmFormDetailForm:formCloumnList_" + lineNo + ":columnId");
    	var modelClassId = document.getElementById("FastFrmFormDetailForm:modelClassId");
		var url=getRootPathSys() + "ajaxHandlerServlet.ajax?handler=notChangeOfInputRequired&modelClassId="+encodeURIComponent(escape(modelClassId.value))+"&columnId="+encodeURIComponent(escape(columnId.value));
		_xmlHttpRequestObj=true;
		try {
			_xmlHttpRequestObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				_xmlHttpRequestObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				_xmlHttpRequestObj = false;
			}
		}
		if (!_xmlHttpRequestObj && typeof XMLHttpRequest!='') {
			try {
				_xmlHttpRequestObj = new XMLHttpRequest();
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}
		if (!_xmlHttpRequestObj && window.createRequest) {
			try {
				_xmlHttpRequestObj = window.createRequest();
				_xmlHttpRequestObj.overrideMimeType('text/xml');
			} catch (e) {
				_xmlHttpRequestObj=false;
			}
		}

		if(_xmlHttpRequestObj) {
			_xmlHttpRequestObj.open("get",url,true);
			_xmlHttpRequestObj.onreadystatechange=function() {
		 		if(_xmlHttpRequestObj.readyState == 4) {
					if(_xmlHttpRequestObj.status == 200) {
					    var result = _xmlHttpRequestObj.responseText;
					    if(result=="1"){
						    for(var i = 0;i<item.length;i++){
								if(item.options[i].value=="Y"){
									item.options[i].selected=true;
								}
							}
					    }
					} else {
					    alert("Not able to retrieve description"+_xmlHttpRequestObj.statusText);
					}
				}
			}
			_xmlHttpRequestObj.send(null);
		}
}