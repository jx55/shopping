 

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
        throw new Error("�ͻ���������汾���ͣ���֧��XMLHttpRequest��������������");
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
		document.getElementById("subclass2").innerHTML="<select name='select2'  onchange='get_j2(this.value);' ><option value='0'>�ؼ�</option></select>";
		return;
	};
	var xmlhttpobj = createxmlhttp();
	if(xmlhttpobj){//�����������xmlhttpobj�ɹ�
		xmlhttpobj.open('get',"http://vue.yaoyiwangluo.com/v-diqu2.asp?bigclassid="+bigclassid+"&number="+Math.random(),true);//get���� �Ӹ��������
		xmlhttpobj.send(null);
		xmlhttpobj.onreadystatechange=function(){//�ͻ��˼�غ���
			if(xmlhttpobj.readystate==4){//�����������������
				if(xmlhttpobj.status==200){
					//alert('ok');
					var html = xmlhttpobj.responseText;//��÷���ֵ
					document.getElementById("subclass2").innerHTML=html;
				}else{
					document.getElementById("subclass2").innerHTML="�Բ����������ҳ��������...";
				}
			}else{
				document.getElementById("subclass2").innerHTML="�����У����Һ�...";//������������
					var html = xmlhttpobj.responseText;//��÷���ֵ
					document.getElementById("subclass2").innerHTML=html;				
			}
		}	
	}
}


 
//ѡ��ؼ���Ч��js > ������
function GetDiqu3(bigclassid){
	//alert(bigclassid);
	if(bigclassid==0){
		document.getElementById("subclass3").innerHTML="<select name='select3'  ><option value='0'>�ؼ�</option></select>";
		return;
	};
	var xmlhttpobj = createxmlhttp();
	if(xmlhttpobj){//�����������xmlhttpobj�ɹ�
		xmlhttpobj.open('get',"http://vue.yaoyiwangluo.com/v-diqu3.asp?bigclassid="+bigclassid+"&number="+Math.random(),true);//get���� �Ӹ��������
		xmlhttpobj.send(null);
		xmlhttpobj.onreadystatechange=function(){//�ͻ��˼�غ���
			if(xmlhttpobj.readystate==4){//�����������������
				if(xmlhttpobj.status==200){
					//alert('ok');
					var html = xmlhttpobj.responseText;//��÷���ֵ
					document.getElementById("subclass3").innerHTML=html;
				}else{
					document.getElementById("subclass3").innerHTML="�Բ����������ҳ��������...";
				}
			}else{
				document.getElementById("subclass3").innerHTML="�����У����Һ�...";//������������
					var html = xmlhttpobj.responseText;//��÷���ֵ
					document.getElementById("subclass3").innerHTML=html;				
			}
		}	
	}
}

 