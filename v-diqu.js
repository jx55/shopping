 

function createxmlhttp()
{
     var activeKey=new Array("MSXML2.XMLHTTP.5.0",
                           "MSXML2.XMLHTTP.4.0",
                           "MSXML2.XMLHTTP.3.0",
                           "MSXML2.XMLHTTP",
                           "Microsoft.XMLHTTP");
    if(window.ActiveXObject)
    {
        for(var i=0;i<activeKey.length;i++)
        {
            try
            {
                xmlHttp=new ActiveXObject(activeKey[i]);
                if(xmlHttp!=null)
                    return xmlHttp;
            }
            catch(error)
            {
                 continue;
            } 
        }
        throw new Error("客户端浏览器版本过低，不支持XMLHttpRequest对象，请更新浏览器");
    }
    else if(window.XMLHttpRequest)
    {
		//alert("3");
        xmlHttp=new window.XMLHttpRequest();
    }
	return xmlHttp;
}


function GetDiqu2(bigclassid){
	if(bigclassid==0){
	//alert("1");
		document.getElementById("subclass2").innerHTML="<select name='select2'  onchange='get_j2(this.value);' ><option value='0'>地级</option></select>";
		return;
	};
	var xmlhttpobj = createxmlhttp();
	if(xmlhttpobj){//如果创建对象xmlhttpobj成功
		xmlhttpobj.open('get',"http://vue.yaoyiwangluo.com/v-diqu2.asp?bigclassid="+bigclassid+"&number="+Math.random(),true);//get方法 加个随机数。
		xmlhttpobj.send(null);
		xmlhttpobj.onreadystatechange=function(){//客户端监控函数
			if(xmlhttpobj.readystate==4){//服务器处理请求完成
				if(xmlhttpobj.status==200){
					//alert('ok');
					var html = xmlhttpobj.responseText;//获得返回值
					document.getElementById("subclass2").innerHTML=html;
				}else{
					document.getElementById("subclass2").innerHTML="对不起，您请求的页面有问题...";
				}
			}else{
				document.getElementById("subclass2").innerHTML="加载中，请梢候...";//服务器处理中
					var html = xmlhttpobj.responseText;//获得返回值
					document.getElementById("subclass2").innerHTML=html;				
			}
		}	
	}
}


 
//选择地级的效果js > 连接县
function GetDiqu3(bigclassid){
	//alert(bigclassid);
	if(bigclassid==0){
		document.getElementById("subclass3").innerHTML="<select name='select3'  ><option value='0'>县级</option></select>";
		return;
	};
	var xmlhttpobj = createxmlhttp();
	if(xmlhttpobj){//如果创建对象xmlhttpobj成功
		xmlhttpobj.open('get',"http://vue.yaoyiwangluo.com/v-diqu3.asp?bigclassid="+bigclassid+"&number="+Math.random(),true);//get方法 加个随机数。
		xmlhttpobj.send(null);
		xmlhttpobj.onreadystatechange=function(){//客户端监控函数
			if(xmlhttpobj.readystate==4){//服务器处理请求完成
				if(xmlhttpobj.status==200){
					//alert('ok');
					var html = xmlhttpobj.responseText;//获得返回值
					document.getElementById("subclass3").innerHTML=html;
				}else{
					document.getElementById("subclass3").innerHTML="对不起，您请求的页面有问题...";
				}
			}else{
				document.getElementById("subclass3").innerHTML="加载中，请梢候...";//服务器处理中
					var html = xmlhttpobj.responseText;//获得返回值
					document.getElementById("subclass3").innerHTML=html;				
			}
		}	
	}
}

 