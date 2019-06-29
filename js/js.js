
function search(){
var searchtext=document.getElementById("searchvalue").value;
var textvalue=document.getElementById("textvalue").innerHTML;
if(searchtext.length==0){
return;
}
document.getElementById("textvalue").innerHTML=textvalue.replaceAll(searchtext,"<font color='red'>"+searchtext+"</font>");
}

String.prototype.replaceAll = function(s1,s2){    
return this.replace(new RegExp(s1,"gm"),s2);    
}
