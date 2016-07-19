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
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/device/getSingoloDeviceCorrelati.php?id=" + id;
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
                            '<div class="col-md-12">'+'<a href="singolodevice.html?id='+arr[i].id +'">'+
                                '<img src="'+ arr[i].path +'" alt="'+ arr[i].nome+'" />'+
                            '</a></div>'+
                            '<div class="col-md-12">'+
                                '<h3>'+arr[i].marca + ' - ' + arr[i].nome +'</h3>'+
                            '</div>'+
                        '</div>'+
                  '</div>';
        }
        out +='</div>';
        
         $("#correlati").html(out);
}

function printMenuSecondario(id, categoria) 
{
    var menu = "";
    menu += '<div class="row grey-menu">'+
        '<div class="col-md-3 col-sm-6"><a href="device-selected-category.html?id='+ categoria +'">torna ai dispositivi</a></div>';
    if(location.pathname == "/tim/singolodevice.html")
        menu +='<div class="col-md-2 col-sm-6 current-link">';
    else
        menu +='<div class="col-md-2 col-sm-6">';
    menu +='<a href="singolodevice.html?id='+ id +'">Presentazione</a>'+
        '</div>';
    
    if(location.pathname == "/tim/specifichedevice.html")
        menu +='<div class="col-md-2 col-sm-4 current-link">';
    else
        menu +='<div class="col-md-2 col-sm-4">';
    menu +='<a href="specifichedevice.html?id='+id+'">Caratteristiche</a></div>';
    
    if(location.pathname == "/tim/recensionedevice.html")
        menu +='<div class="col-md-2 col-sm-4 current-link">';
    else
        menu +='<div class="col-md-2 col-sm-4">';
    menu +='<a href="recensionedevice.html?id='+ id +'&cat='+ categoria +'">Recensioni</a>'+
        '</div>';
    if(location.pathname == "/tim/asdevice.html")
        menu +='<div class="col-md-3 col-sm-4 current-link">';
    else
        menu +='<div class="col-md-3 col-sm-4">';
    menu +='<a href="asdevice.html?id='+ id +'&cat='+ categoria +'">Assistenza Tecnica</a></div>';
    menu +='</div>';
    return menu;
}

function printValutazione(n)
{
    var i;
    var out = "";
    for(i=1; i<=5; i++)
    {
        if(i<=n)
            out += '<img src="http://guidoantoniomatteo.altervista.org/tim/img/device/recensioni/gialla.png" />';
        else
            out += '<img src="http://guidoantoniomatteo.altervista.org/tim/img/device/recensioni/grigia.png" />';
    }
    return out;
}
