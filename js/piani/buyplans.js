$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {  
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/piani/getBuyPiani.php?id="+ id;
                
    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});
      
    function myFunction(response) 
    {   /**
        *   id, nome, chiamate, messaggi, internet, categoria, foto, prezzo, fotogrande
        *   [N] descrizione, titolo [N]
        */
        var arr = JSON.parse(response);
        document.getElementById("foto").innerHTML = '<img src="' + arr[0].foto + '" class="img-responsive" />';
        document.getElementById("nome").innerHTML = arr[0].titolo;
        document.getElementById("prezzo").innerHTML = arr[0].prezzo;
        document.getElementById("goback").innerHTML = '<a href="piano.html?id=' + arr[0].id + '">Torna Indietro</a>'
    }
