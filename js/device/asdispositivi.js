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
        printAsAssociati("assistenzadispositivi", id);
    }); 

});

});