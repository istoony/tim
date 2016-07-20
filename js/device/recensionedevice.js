$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/device/device.js', function() { 
$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {   
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    var category = /cat=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var id_category = category ? category : 'cat';
    
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
        var category = /cat=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        var id_category = category ? category : 'cat';
        var id = result;
            /*
            *
            *   iddispositivo, nome, id_categoria, marca,
            *   [N] utente, descrizione, data, valutazione
            */
        var arr = JSON.parse(response);
        var i;
        var out= "";
        if(arr.length != 0)     
        {
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
        else
        {
            $("#titolo").html('Nessuna recensione');
            $("#menudevice").html(printMenuSecondario(id, id_category)); 
        }
    }

$('#review-form').submit(function(){
    var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
    var category = /cat=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var id_category = category ? category : 'cat';
    
    var nome = $('#nome').val();
    var value = $('#value').val();
    var review = $('#review-text').val();
    
    $.getJSON('http:guidoantoniomatteo.altervista.org/components/device/newReview.php',
        { id: id, nome: nome, value: value, review: review },
        function(json) {
            window.location.replace("recensionedevice.html?id="+ id +"&cat="+ id_category);
        });
    window.location.replace("recensionedevice.html?id="+ id +"&cat="+ id_category);
    });