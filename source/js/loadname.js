var owner_name;
if (window.XMLHttpRequest) // for IE7+, Firefox, Chrome, Opera, Safari
    owner_name=new XMLHttpRequest();
else // for IE6, IE5
    owner_name=new ActiveXObject("Microsoft.XMLHTTP");
owner_name.open("GET","../../config.json",true);
owner_name.send(null);
owner_name.onload = function(){
    var name = JSON.parse(owner_name.responseText)["Name"];
    document.title = name;
    document.getElementById("PersonalName").innerHTML = name;
}