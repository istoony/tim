  $.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
      
            printMainCat();
            
            var url = location.href;
            var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/as/getSubCategory.php?id=" + id;
            
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            
            function myFunction(response) 
            {
                var url = location.href;
                var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
                var result = captured ? captured : 'id';
                var id = result;
                
                var arr = JSON.parse(response);
                var i;
                                
                var out = "";
                
                for(i = 0; i < arr.length; i++) 
                {
                    if(id!=0)
                        out += "<div class=\"row grey-bar\">"+
                                    "<div class=\"col-md-12\">" +
                                        "<a data-toggle=\"collapse\" href=\"#"+ arr[i].id +"\">" + arr[i].titolo + "</a>"+
                                    "</div>"+
                                "</div>"+
                                "<div class=\"row collapse as-last\" id=\"" + arr[i].id+ "\"></div>";
                    else
                        out += "<div class=\"row as-last\" id=\"" + arr[i].id+ "\"></div>";
                }
                
                document.getElementById("sottocategorie").innerHTML = out;
            
                var assingle = new XMLHttpRequest();
                
                if(id==0)
                    document.getElementById("titolocategoria").innerHTML = "<h1 class=\"titolorosso\">Domande frequenti:</h1>";
                else
                    document.getElementById("titolocategoria").innerHTML = "<h1 class=\"titolorosso\">" + arr[0].catnome + "</h1>";
                
                var getastitle = "http://guidoantoniomatteo.altervista.org/tim/components/as/getAsTitle.php?id=" +id;
                assingle.open("GET", getastitle, true);
                assingle.send();
                assingle.onreadystatechange=function() 
                {
                    if (assingle.readyState == 4 && assingle.status == 200)
                        stampaassingole(assingle.responseText);
                }
            }
            
            function stampaassingole(response) 
            {
                var arr = JSON.parse(response);
                var i; 
                var out = "";
                var id = arr[0].sottocategoria;
                for(i = 0; i < arr.length; i++) 
                {
                    if(id != arr[i].sottocategoria)
                    {
                        document.getElementById(id).innerHTML = out;
                        out = "";
                        id = arr[i].sottocategoria;
                    }
                    out += "<div class=\"col-md-12\">" +
                                "<a href=\"assingola.html?id=" + arr[i].id +"\">" + arr[i].titolo + "</a>";
                    out += "</div>";
                }
                document.getElementById(arr[i - 1].sottocategoria).innerHTML = out;  
            }
});