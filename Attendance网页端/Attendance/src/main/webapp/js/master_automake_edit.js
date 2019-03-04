//import java.util.ArrayList;
	var _xmlHttpRequestObj;
	//window.onload=function() {
	//}
	//selectOneMenuId:include formId (example: formId:TagId)
	
    function ChangeSelectSubAutoMake(selectOneMenuId, subSelectId) {
		var zhi=document.getElementById(selectOneMenuId).value;
		var url=getRootPath() + "ajaxHandlerServlet.ajax?handler=subAutoMake&id="+encodeURIComponent(escape(zhi));
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
					    parseMessageMenu("item", subSelectId);
					    select();
					} else {
					    alert("Not able to retrieve description"+req.statusText);
					}
				}
			}
			_xmlHttpRequestObj.send(null);
		}
    }


	// tagName : going to printout the tagName
	// id : the tag's id
function parseMessageMenu(tagName, subSelectOneMenuId) {
  //  	alert(tagName);
		var xmlDoc=_xmlHttpRequestObj.responseXML.documentElement;
		var xSel=xmlDoc.getElementsByTagName(tagName);
		var select_root=document.getElementById(subSelectOneMenuId);
		select_root.options.length=0;
		for(var i=0;i<xSel.length;i++)
		{
			var xValue=xSel[i].childNodes[0].firstChild.nodeValue;
			var xText=xSel[i].childNodes[1].firstChild.nodeValue;
			try{
			    select_root.options[i]=new Option(xText,xValue);
			} catch(e) {
				
			}
		}
	}
function getRootPath()   
	{   
	var location=document.location;   
	var pathName=location.pathname.split("/");   
	return location.protocol+"//"+location.host+"/"+pathName[1]+"/";   
	}   
	
function select(){
	var xmlDoc=_xmlHttpRequestObj.responseXML.documentElement;
	var xSel=xmlDoc.getElementsByTagName("item");
	var select_root=document.getElementById("masterAutoMakeEditForm:pageType");
	select_root.options.length=0;
	if(document.getElementById("masterAutoMakeEditForm:modelType").value == "Master"){
		 select_root.options[0]=new Option("列表","list");
		 select_root.options[1]=new Option("编辑","edit");
		 select_root.options[2]=new Option("详细","detail");
	}else{
		 select_root.options[0]=new Option("列表","list");
		 select_root.options[1]=new Option("编辑","edit");
	}
} 