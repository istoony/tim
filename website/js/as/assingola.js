$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
    $( document ).ready(function() {   
            printMainCat();
            
            var url = location.href;
            var captured = /id=([^&]+)/.exec(url)[1];
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/as/getSingleAs.php?id="+ id;
            
            printSecondCatAs(id);
           
            
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
                document.getElementById("titolocategoria").innerHTML = "<h1 class=\"titolorosso\" style=\"text-align: left;\">" + arr[0].titolo + "</h1>";
                var out = "<p>" + decodeHTMLEntities(arr[0].descrizione) + "</p>";
                document.getElementById("descrizione").innerHTML = out;
            }