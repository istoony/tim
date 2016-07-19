$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {  
$( document ).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/piani/getPianiByCategory.php?id=" + id;
    
    printPlansMainCat();
    
    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});
});

    function myFunction(response) 
    {
        var arr = JSON.parse(response);
        var i;
        var out = "";
        var out2 = "";
        document.getElementById("presentationphoto").innerHTML = "<img src=\"" + arr[0].fotogrande + "\" style='width:100%'/>"+
            "<div class='row'>"+
                "<div class='col-xs-8 inner-presentation'>"+
                    "<div><h1>" + arr[0].categorianome + "</h1></div>"+
                    "<div><h2>" + arr[0].descrizione + "</h2></div>"+
                "</div>"+
            "</div>";
        for(i = 0; i < arr.length; i++) 
        {
            out += "<div class=\"col-sm-3\">"+
                        "<div class='row'><div class='col-md-12' style='padding-top: 30px;'>"+
                        "<a href=\"piano.html?id=" + arr[i].id + "\" >"+
                            "<img src=\"" + arr[i].foto + "\" style='width:100%'/>"+
                        "</a></div></div>"+
                        "<div class='row'><div class='col-md-12'>"+
                            "<a href=\"piano.html?id=" + arr[i].id + "\" >" + 
                                arr[i].titolo +
                        "</a></div></div>"+
                        arr[i].prezzo +
                    "</div>";
        }
                
        document.getElementById("piani").innerHTML = out;
    }