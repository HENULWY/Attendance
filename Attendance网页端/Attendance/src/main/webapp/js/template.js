// JavaScript Document

	//�����ʾ�����
	var width = screen.width - 190;
	function elementwidth(){
		document.getElementById("content").style.width = width;
	}
	
	//�ı�CSS�ļ�
	function changeStyle(name){
		css=document.getElementById("cssfile");
		css.href="css/"+name+".css";
	}