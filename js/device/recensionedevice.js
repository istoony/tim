$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/device/device.js', function() { 
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {   
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/device/getRecensioni.php?id=" + id;
    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    printCorrelati(id);
});
});

    function myFunction(response) 
    {
        var url = location.href;
        var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        var result = captured ? captured : 'id';
        var id = result;
            /*
            *
            *   iddispositivo, nome, id_categoria, marca,
            *   [N] utente, descrizione, data, valutazione
            */
        var arr = JSON.parse(response);
        var i;
        var out= "";
                
        $("#titolo").html(arr[0].marca + ' - ' + arr[0].nome + ' - Recensioni' );
        out += '<div class="row">';
        for(i=0; i<arr.length; i++)
        {
            out += '<div class="col-md-12">'+
                        '<h2 class="titoloblu left">'+arr[i].utente+' - '+ arr[i].data +'</h2>'+
                   '</div>'+
                '<div class="col-md-12">'+ printValutazione(arr[i].valutazione) +'</div>'+
                '<div class="col-md-12">'+ decodeHTMLEntities(arr[i].descrizione) +'</div>';
        }
        out += '</div>';
        $("#recensioni").html(out);  
        $("#menudevice").html(printMenuSecondario(id, arr[0].id_categoria));  
    }