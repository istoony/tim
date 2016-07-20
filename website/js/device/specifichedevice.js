$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/device/device.js', function() { 
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {     
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    
    var xmlhttp = new XMLHttpRequest();
var url = "http://guidoantoniomatteo.altervista.org/tim/components/device/getSpecificheDevice.php?id=" + id;
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
            *   id, nome, id_categoria, marca, specifiche
            */
        var arr = JSON.parse(response);
        var i;
        var out= "";
        $("#titolo").html(arr[0].marca + ' - ' + arr[0].nome + ' - Caratteristiche' );
        $("#specifiche").html(decodeHTMLEntities(arr[0].specifiche));  
        $("#menudevice").html(printMenuSecondario(id, arr[0].id_categoria));
    }