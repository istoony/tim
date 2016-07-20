$( document ).ready(function() {
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/small-menu.js', function() {
    
            printPlansMainCat();
            
            var url = location.href;
            var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/piani/getSingoloPiano.php?id="+ id;
                
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
           
            function myFunction(response) 
            {   /**
                *   id, nome, chiamate, messaggi, internet, categoria, foto, prezzo, prezzoscontato, fotogrande
                *   [N] descrizione, titolo [N]
                */
                var arr = JSON.parse(response);
                
                document.getElementById("presentationphoto").innerHTML = "<img src=\"" + arr[0].fotogrande + "\" style='width:100%'/>"+
            "<div class='row'>"+
                "<div class='col-xs-8 inner-presentation'>"+
                    "<div><h1>" + arr[0].nome + "</h1></div>"+
                "</div>"+
            "</div>";
                
                var i;                 
                var out = "";
                
                for(i = 0; i < arr.length; i++) 
                {
                    out += "<div style=\"border-bottom: solid 3px #000; \">";
                    out += "<div><h1 class=\"titolorosso\" style=\"text-align:left;\">" + arr[i].titolo + "</h1></div>";
                    out += "<div><p>" + decodeHTMLEntities(arr[i].descrizione) + "</p></div>";  
                    out += "</div>";
                }
                document.getElementById("descrizione").innerHTML = out;
                document.getElementById("information-plans").innerHTML = createPlansInformation(arr[0]);
            }
            printAsAssociati("relazionepianiassistenza", id);
            smallMenuLoaded();
            printSLAssociati(id, "relazionepianismartlife");
        });
     });
});
