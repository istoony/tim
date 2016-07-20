$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/device/device.js', function() { 
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
    
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/device/getSingoloDevice.php?id=" + id;
    
    var foto = new XMLHttpRequest();
    var pathfoto = "http://guidoantoniomatteo.altervista.org/tim/components/device/getSingoloDeviceFoto.php?id=" + id;
    
    var promozioni = new XMLHttpRequest();
    var pr = "http://guidoantoniomatteo.altervista.org/tim/components/device/getSingoloDevicePromozioni.php?id=" + id;
    
    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    foto.onreadystatechange=function() 
    {
        if (foto.readyState == 4 && foto.status == 200)
                printFoto(foto.responseText);
    }
    
    foto.open("GET", pathfoto, true);
    foto.send();

    promozioni.onreadystatechange=function() 
    {
        if (promozioni.readyState == 4 && promozioni.status == 200)
                printPromozioni(promozioni.responseText);
    }
    
    promozioni.open("GET", pr, true);
    promozioni.send();
    
    printCorrelati(id);
    printSLAssociati(id, "smartlifedispositivi");
    $("#menu-device").html(printMenuSecondario(id));
    
});
});

    function myFunction(response) 
    {
        var url = location.href;
        var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        var result = captured ? captured : 'id';
        var id = result;
        var arr = JSON.parse(response);
        var i;
                
        $("#titolo").html(arr[0].marca + ' - ' + arr[0].nome);
        $("#caratteristiche").html('<p>' +  decodeHTMLEntities(arr[0].descrizione) + '</p>');
        $("#prezzo").html(printPrezzo(arr[0].prezzo, arr[0].prezzoscontato));
        $("#menu-device").html(printMenuSecondario(id, arr[0].id_categoria));
        $("#deviceplans").html('<a href="deviceplans.html?id='+ id +'&cat='+ arr[0].id_categoria +'">'+
                        '<h3>Acquista con un piano</h3>'+
                    '</a>');
    }
        
    function printFoto(response) 
    {
        var arr = JSON.parse(response);
        var i = 1; 
        var out = "";
         $("#immagine").html('<img src="' + arr[0].path + '" class="myimg-responsive"/>');
        for(i;i<arr.length; i++)
        {
        out +='<div class="col-md-12 col-sm-4 col-xs-4">'+
            '<img src="' +arr[i].path +'" class="img-device" /></div>';
        }
         $("#secondarie").html(out);
    }
    
    function printPromozioni(response) 
    {
        var arr = JSON.parse(response);
        var i = 0; 
        var out = "";
        if(arr.length > 0)
            out += '<h1 class="titolorosso left">Incluso nel Prezzo</h1>'+
                        '<div class="row">'+
                            '<div class="col-md-12">';
        for(i;i<arr.length; i++)
        {
            out +='<div class="row grey">'+
                        '<div class="col-md-3">'+
                            '<img src="'+ arr[i].path +'" />'+
                        '</div>'+
                        '<div class="col-md-9">'+
                            '<h2 class="titoloblu">'+ arr[i].titolo +'</h2>'+
                            '<p>'+ decodeHTMLEntities(arr[i].descrizione) +'</p>'+
                        '</div>'+
                    '</div>';
            
        }
        out +='</div>'+'</div>';
        $("#promozioni").html(out);
    }
