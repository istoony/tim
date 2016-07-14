function printPrezzo(prezzo, prezzoscontato)
{
    var out = "<div class=\"row\">";
    if(prezzoscontato == undefined)
        out+= '<div class=\"col-md-12\"><h1 class="titolorosso left" style="padding-left: 10px;">'+ prezzo +'</h1></div>';
    else
        out+= '<div class=\"col-md-3\"><h1 class="titolorosso left" style="padding-left: 10px;">'+ prezzoscontato +'</h1></div>'+
            '<div class=\"col-md-6\">' +
                '<h2 class="titoloblu left" style=\"text-decoration: line-through;\">' + prezzo + '</h2></div>';
    out += "</div>";
    return out;
}

function printCorrelati(id)
{    
    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/components/device/getSingoloDeviceCorrelati.php?id=" + id;
     xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                corr(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function corr(response) 
{
        var arr = JSON.parse(response);
        var i;
        var out = "";
        if(arr.length <= 0)
            return;
        out += '<h1 class="titolorosso left">Dispositivi Correlati</h1>';
        out += '<div class="row correlati">';
        for(i=0;i<arr.length;i++)
        {
            out+= '<div class="col-sm-3">'+
                        '<div class="row">'+
                            '<div class="col-md-12">'+
                                '<img src="'+ arr[i].path +'" alt="'+ arr[i].nome+'" class="img-responsive" />'+
                            '</div>'+
                            '<div class="col-md-12">'+
                                '<h3>'+arr[i].marca + ' - ' + arr[i].nome +'</h3>'+
                            '</div>'+
                  '</div>';
        }
        out +='</div>';
        
         $("#correlati").html(out);
}

$( document ).ready(function()
{
    var menu = "";
    menu += '<div class="row grey-menu">'+
        '<div class="col-sm-3"><a href="singolodevice.html">torna ai dispositivi</a></div>'+
        '<div class="col-sm-2"><a href="singolodevice.html">Presentazione</a></div>'+
        '<div class="col-sm-2"><a href="singolodevice.html">Caratteristiche</a></div>'+
        '<div class="col-sm-2"><a href="singolodevice.html">Recensioni</a></div>'+
        '<div class="col-sm-3"><a href="singolodevice.html">Assistenza Tecnica</a></div>'+
    '</div>';
    $("#menu-device").html(menu);
});