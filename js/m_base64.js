// JavaScript Document

//需要在页面上引用 Base64.js

//专业 Base64 数据编码程序 JavaScript 版本 与 GO PHP Python 用法一致

//数据解码
function Decode_PHP_Base64(data)
{
 //先还原字符串
 data=Replace_Revert(data);
 //进行 base64 编码还原
 return Base64.decode(data) ;
}

//数据编码
function Encode_PHP_Base64(data)
{
	 //先编码字符串
	 data=Base64.encode(data);
	 //进行传输压缩
	 return Replace_Data(data);
}

//替换字符串

function Replace_Data(data)
{
	 //$data=str_replace("/","@",$data);
	 data = data.replace('/', '@');
	 
	 //$data=str_replace("+","_",$data);
	 data = data.replace('+', '_');
	 
	//$data=str_replace("=","$",$data);
	data = data.replace('=', '$');
	 
	 return  data;
}

//还原字符串

function Replace_Revert(data)
{
	 //$data=str_replace("@","/",$data);
	  data = data.replace('@', '/');
	 
	 //$data=str_replace("_","+",$data);
	  data = data.replace('_', '+');
	 
	 //$data=str_replace("$","=",$data);
	  data = data.replace('$', '=');
	 
	 return  data;
}
