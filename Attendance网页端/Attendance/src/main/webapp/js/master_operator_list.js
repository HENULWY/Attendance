//------------
//�û���Ϣ��֤
//------------

//�û���
function operName(formvalue)
{
	var cv=document.getElementById(formvalue).value;
	var div=document.getElementById("font_operName");
	if(cv==null||cv=="")
	{
		div.style.display='inline';
	}
	else
	{
		div.style.display='none';
	}
}
//����
function password(password)
{
	var pwd1=document.getElementById(password).value;
	var font_password=document.getElementById("font_password");
	if(pwd1==""||pwd1==null)
	{
		font_password.innerText="�����벻��Ϊ�գ�";
	}
	else if(pwd1.length<6)
	{
		pwd1="";
		font_password.innerHTML="�����볤�Ȳ���С��6λ��";
	}
	else
	{
		font_password.innerHTML="";
	}
}
//ȷ������
function querenpassword(password,querenpassword)
{
	var font_querenpassword=document.getElementById("font_querenpassword");
	var pwd1=document.getElementById(password).value;
	var pwd2=document.getElementById(querenpassword).value;
	if(pwd1!=pwd2)
	{
		pwd2="";
		font_querenpassword.innerHTML="���������벻һ�£�����������";
	}
	else
	{
		font_querenpassword.innerHTML="";
	}
}
//����
function checkname(formvalue)
{
	var cv=document.getElementById(formvalue).value;
	var div=document.getElementById("font_name");
	if(cv==null||cv=="")
	{
		div.style.display='inline';
	}
	else
	{
		div.style.display='none';
	}
}
//�绰����
function yz_tel(tel){
	var cf1=document.getElementById(tel);
	if((/[^\d]/g.test(cf1.value))){
		cf1.value = '';
		alert("��绰���������������ɣ�");
//		cf1.focus();
	}
	else if(cf1.value.length<6)
	{
		alert("��绰���벻��С����λ");
	}
}
function yz_zipCode(form){
	var cf1=document.getElementById(form+":zipCode");
	if((/[^\d]/g.test(cf1.value))){
		cf1.value = '';
		alert("���ʱ��������λ���֣�");
//		cf1.focus();
	}
	if(cf1.value.length!=6)
	{
		alert("���ʱ��������λ���֣�");
	}
}
function validate_email(tsxh){
	with (document.getElementById(tsxh)){
		var apos=value.indexOf("@");
		var dotpos=value.lastIndexOf(".");
		if (apos<1||dotpos-apos<2){
			value = "";
			alert("�������ʽ����ȷ!");
			return false;
		}else{
			return true;
		}
	}
}
function oper_xuanZe(){
	document.getElementById("no1").style.display="inline";
	document.getElementById("no2").style.display="inline";
	document.getElementById("no3").style.display="inline";
	document.getElementById("no4").style.display="inline";
	document.getElementById("no5").style.display="inline";
	document.getElementById("no6").style.display="inline";
	document.getElementById("no7").style.display="inline";
	document.getElementById("no8").style.display="inline";
	document.getElementById("no9").style.display="inline";
	document.getElementById("no10").style.display="inline";
	document.getElementById("no11").style.display="inline";
}
function oper_xuanZe1(){
	document.getElementById("font_name").style.display="none";
	document.getElementById("no1").style.display="none";
	document.getElementById("no2").style.display="none";
	document.getElementById("no3").style.display="none";
	document.getElementById("no4").style.display="none";
	document.getElementById("no5").style.display="none";
	document.getElementById("no6").style.display="none";
	document.getElementById("no7").style.display="none";
	document.getElementById("no8").style.display="none";
	document.getElementById("no9").style.display="none";
	document.getElementById("no10").style.display="none";
	document.getElementById("no11").style.display="none";
	document.getElementById("adminMasterOperatorList:name").value="";
	document.getElementById("adminMasterOperatorList:gender").value="";
	document.getElementById("adminMasterOperatorList:degree").value="";
	document.getElementById("adminMasterOperatorList:homeTel").value="";
	document.getElementById("adminMasterOperatorList:homeAddress").value="";
	document.getElementById("adminMasterOperatorList:zipCode").value="";
	document.getElementById("adminMasterOperatorList:oaTel").value="";
	document.getElementById("adminMasterOperatorList:peopleId").value="";
	document.getElementById("adminMasterOperatorList:peopleTel").value="";
	document.getElementById("adminMasterOperatorList:peopleEmail").value="";
	document.getElementById("adminMasterOperatorList:birthDate").value="";
}
//���֤��֤ 
function check(form){
	if(isIdCardNo(document.getElementById(form+":peopleId").value) == false){
		alert("��������ȷ�����֤���룡");
		document.getElementById(form+":peopleId").value = "";
	}
}
function isIdCardNo(num) 
{ 
	var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1); 
	var error; 
	var varArray = new Array(); 
	var intValue; 
	var lngProduct = 0; 
	var intCheckDigit; 
	var intStrLen = num.length; 
	var idNumber = num; 
	// initialize 
	if ((intStrLen != 0) && (intStrLen != 15) && (intStrLen != 18)) 
	{ 
		error = "�������֤���볤�Ȳ��ԣ�"; 
		alert(error); 
		//frmAddUser.txtIDCard.focus(); 
		return false; 
	} 
	// check and set value 
	for(i=0;i<intStrLen;i++) 
	{ 
		varArray[i] = idNumber.charAt(i); 
		if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) 
		{ 
			//error = "��������֤���룡."; 
			//alert(error); 
			//frmAddUser.txtIDCard.focus(); 
			return false; 
		} 
		else if (i < 17) 
		{ 
			varArray[i] = varArray[i]*factorArr[i];
		} 
	} 
	if (intStrLen == 18) 
	{ 
		//check date 
		var date8 = idNumber.substring(6,14); 
		if (checkDate(date8) == false) 
		{ 
			//error = "���֤��������Ϣ����ȷ��."; 
			//alert(error); 
			return false; 
		} 
		// calculate the sum of the products 
		for(i=0;i<17;i++) 
		{ 
			lngProduct = lngProduct + varArray[i]; 
		} 
		// calculate the check digit 
		intCheckDigit = 12 - lngProduct % 11; 
		switch (intCheckDigit) 
		{ 
			case 10:intCheckDigit = 'X';break; 
			case 11:intCheckDigit = 0;break; 
			case 12:intCheckDigit = 1;break; 
		} 
		// check last digit 
		if (varArray[17].toUpperCase() != intCheckDigit) 
		{ 
			//error = "���֤Ч��λ����!...��ȷΪ�� " + intCheckDigit + "."; 
			//alert(error); 
			return false; 
		} 
	} 
	else
	{ //length is 15 
		//check date 
		var date6 = idNumber.substring(6,12); 
		if (checkDate(date6) == false) 
		{ 
			//alert("���֤������Ϣ����."); 
			return false; 
		} 
	} 
	//alert ("Correct."); 
	return true; 
} 