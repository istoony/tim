$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/device/device.js', function() { 
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
    
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var category = /cat=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var id = captured ? captured : 'id';
    var id_category = category ? category : 'cat';
    $( document ).ready(function() 
    {
        $("#menu-device").html(printMenuSecondario(id, 1));
        var xmlhttp = new XMLHttpRequest();
        var url = "http://guidoantoniomatteo.altervista.org/tim/components/device/getPlansDevice.php?id=" + id;
         xmlhttp.onreadystatechange=function() 
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    deviceplans(xmlhttp.responseText);
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }); 
});

});

function deviceplans(response)
{
        var arr = JSON.parse(response);
        var i = 0; 
        var out = "";
        $("#titolo-device").html(arr[0].marca +' - '+ arr[0].nomedevice)
        for(i=0; i<arr.length;i++)
        {
            out +='<div class="row">';
            out += createPlansInformation(arr[i]);
            out +='</div>';
            out +='<div class="row"><div class="col-md-12" style="height: 30px;"></div></div>';
        }
        $("#plans-information").html(out);

}