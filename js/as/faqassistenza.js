$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
    $( document ).ready(function() {      
            printMainCat();
            
            var url = location.href;
            var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/as/getSingleFaq.php?id="+ id;
            
            printSecondCatAs(id);
           
            
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
           
            function myFunction(response) 
            {
                var arr = JSON.parse(response);
                var i;
                var out = "";
                document.getElementById("titolocategoria").innerHTML = "FAQ:" + arr[0].titolo_assistenza;
                for(i=0; i< arr.length; i++)
                {   
                    out +="<div class='row grey-bar'>"+
                        "<div class=\"col-md-12\">"+ arr[i].titolo + 
                          "</div></div>"+
                        "<div class='row'>"+
                              "<div class=\"col-md-8\">" + decodeHTMLEntities(arr[i].descrizione) + "</div>";
                    if(arr[i].foto!="")
                    out +="<div class=\"col-md-4 \" style='text-align: center;'>"+
                            "<img src=\""+ arr[i].foto+"\" alt=\""+ arr[i].titolo +"\">"+
                        "</div></div>";
                }
                document.getElementById("descrizione").innerHTML = out;
            }
    });
});