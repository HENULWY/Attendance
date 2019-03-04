var ajaxRequested = false;
function allChecked(formId,tableId,selectBoxId,checkBoxId,buttonId) {
	if(document.getElementById(formId + ":"+checkBoxId).checked) {
		document.getElementById(formId + ":"+buttonId).innerText="全部取消";
		servesForAllChecked(formId,tableId,selectBoxId,true);
	} else {
		document.getElementById(formId + ":"+buttonId).innerText="全部选择";
		servesForAllChecked(formId,tableId,selectBoxId,false);
	}
}

function servesForAllChecked(formId,tableId,selectBoxId,trueOrFalse) {
	for (var counter=0;counter<50;counter++) {
		if (document.getElementById(formId + ":" + tableId + "_" + counter + ":" + selectBoxId)) {
			document.getElementById(formId + ":" + tableId + "_" + counter + ":" + selectBoxId).checked=trueOrFalse;
			//alert(document.getElementById(formId + ":" + tableId + "_" + counter + ":" + selectBoxId).checked);
			//document.getElementById("commonDataBackupForm:_id1_" + counter + ":selectBooleanCheckboxA").checked=trueOrFalse;
			//alert(document.getElementById("commonDataBackupForm:_id1_" + counter + ":selectBooleanCheckboxA").checked);
		} else {
			break;
		}
	}
}
function servesForChangeText(formId,tableId,selectBoxId,trueOrFalse) {
	if(tableId == null || tableId.length == '0'){
		
	}else{
		
	}
}
function selectedAll(form){
	for(var i=0;i<form.elements.length;i++)  {   
		var e = form.elements[i]; 		 
		if (e.type=='checkbox' && e.name != 'chkall')  
		   e.checked = form.chkall.checked;  
    	}
	}
var _xmlHttpRequestObj;
//window.onload=function() {
//}
function commonChangeDataTableSelect(formName,tableName,wholeId,selectOneMenuId, subSelectOneMenuId, modelId,fieldTypeName,fieldCodeName,fieldNameName) {
	lineNo = wholeId.substr(formName.length+tableName.length+2,wholeId.length-formName.length-tableName.length-3-selectOneMenuId.length);
	commonChangeSelect(wholeId, formName + ":" + tableName + "_" + lineNo + ":" + subSelectOneMenuId, modelId,fieldTypeName,fieldCodeName,fieldNameName);
}
	
//selectOneMenuId:一级下拉菜单(example: formId:tagId)
//subSelectOneMenuId:二级联动下拉菜单(example: formId:subTagId)
function commonChangeSelect(selectOneMenuId, subSelectOneMenuId, modelId,fieldTypeName,fieldCodeName,fieldNameName) {
	var fieldTypeValue=document.getElementById(selectOneMenuId).value;
	if (fieldTypeValue == null || fieldTypeValue == "") {
		return;
	}
	var url=getRootPath() + "ajaxHandlerServlet.ajax?handler=subList&modelId="+modelId+"&fieldTypeName="+fieldTypeName+"&fieldTypeValue="+encodeURIComponent(escape(fieldTypeValue))+"&fieldCodeName="+fieldCodeName+"&fieldNameName="+fieldNameName;
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
				    commonParseMessage("item", subSelectOneMenuId);
				} else {
				    alert("Not able to retrieve description"+req.statusText);
				}
			}
		}
		_xmlHttpRequestObj.send();
	}
}

// tagName : going to printout the tagName
// id : the tag's id
function commonParseMessage(tagName, subSelectOneMenuId) {
	var xmlDoc=_xmlHttpRequestObj.responseXML.documentElement;
	var xSel=xmlDoc.getElementsByTagName(tagName);
	var select_root=document.getElementById(subSelectOneMenuId);
	var subValue=select_root.value;
	select_root.options.length=0;
	
	var xValue="";
	var xText="";
	try{
	    select_root.options[0]=new Option(xText,xValue);
	} catch(e) {
	
	}
	for(var i=0;i<xSel.length;i++)
	{
		var xValue=xSel[i].childNodes[0].firstChild.nodeValue;
		var xText=xSel[i].childNodes[1].firstChild.nodeValue;
		try{
		    select_root.options[i+1]=new Option(xText,xValue);
		    if (subValue == xValue) {
		    	select_root.options[i+1].selected = true;
		    }
		} catch(e) {
			alert(e);
		}
	}
	ajaxRequested = true;
}
function getRootPath()   
{   
	var location=document.location;   
	var pathName=location.pathname.split("/");   
	return location.protocol+"//"+location.host+"/"+pathName[1]+"/";   
}   
