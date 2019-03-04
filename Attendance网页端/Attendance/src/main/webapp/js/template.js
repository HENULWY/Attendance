// JavaScript Document

	//获得显示器宽度
	var width = screen.width - 190;
	function elementwidth(){
		document.getElementById("content").style.width = width;
	}
	
	//改变CSS文件
	function changeStyle(name){
		css=document.getElementById("cssfile");
		css.href="css/"+name+".css";
	}