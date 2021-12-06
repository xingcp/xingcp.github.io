var main_content;
if (window.XMLHttpRequest) // for IE7+, Firefox, Chrome, Opera, Safari
    main_content=new XMLHttpRequest();
else // for IE6, IE5
    main_content=new ActiveXObject("Microsoft.XMLHTTP");
main_content.open("GET","index.md",true);
main_content.send(null);
main_content.onload = function(){
    console.log(main_content.responseText);
    var converter = new showdown.Converter();
    var html = converter.makeHtml(main_content.responseText);
    document.getElementById("main_content").innerHTML = html;
}