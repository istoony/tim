function decodeHTMLEntities(text) 
{
    var entities = [
        ['apos', '\''],
        ['amp', '&'],
        ['lt', '<'],
        ['gt', '>']
    ];
    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}

function printMainCat()
{
    var maincategory = new XMLHttpRequest();
    var main = "http://guidoantoniomatteo.altervista.org/tim/components/as/getMainCategory.php";
    maincategory.onreadystatechange=function() 
    {
        if (maincategory.readyState == 4 && maincategory.status == 200)
                maincat(maincategory.responseText);
    }
    maincategory.open("GET", main, true);
    maincategory.send();
}

function maincat(response) 
{
    var arr = JSON.parse(response);
    var i; 
    var out = "";
    for(i = 0; i < arr.length; i++) 
    {
        if(arr[i].titolo.length > 12)
            out += "<div class=\"col-md-3\">";
        else
            out += "<div class=\"col-md-2\">";
        out +="<a href=\"assubcategory.html?id=" + arr[i].id +"\">" + arr[i].titolo +
                        "</a>";
        out += "</div>";
    }
    out += "<div class=\"col-md-2\">" +
                "<a href=\"assubcategory.html?id=0\">In Evidenza</a>";
    out += "</div>";
    document.getElementById("categorie").innerHTML = out;
} 

function printSecondCatAs(id)
{
    var maincategory = new XMLHttpRequest();
    var main = "http://guidoantoniomatteo.altervista.org/tim/components/as/getSecondCat.php?id="+ id;
    maincategory.onreadystatechange=function() 
    {
        if (maincategory.readyState == 4 && maincategory.status == 200)
                secondMenuAs(maincategory.responseText);
    }
    maincategory.open("GET", main, true);
    maincategory.send();
}

function secondMenuAs(response)
{
    var arr = JSON.parse(response);
    var barra_grigia = "";
    if(location.pathname != "/tim/as/assingola.html")
        barra_grigia  += "<div class=\"col-md-3\">"+
                        "<a href=\"assingola.html?id="+ arr[0].id +"\">Torna alla domanda</a>"+
                    "</div>";
    barra_grigia +="<div class=\"col-md-3\">"+
                        "<a href=\"assubcategory.html?id="+ arr[0].categoria +"\">Altre Domande</a>"+
                    "</div>";
    if(arr[0].numfaq > 0)
        barra_grigia += "<div class=\"col-md-3\">"+
                                "<a href=\"faqassistenza.html?id=" + arr[0].id +"\">FAQ</a>"+
                        "</div>";
    if(arr[0].numdev> 0)
        barra_grigia += "<div class=\"col-md-3\">"+
                            "<a href=\"deviceas.html?id=" + arr[0].id +"\">Dispositivi"+
                        "</a></div>";
    document.getElementById("barragrigia").innerHTML = barra_grigia;
}

function printPlansMainCat()
{
    var maincategory = new XMLHttpRequest();
    var main = "http://guidoantoniomatteo.altervista.org/tim/components/piani/getMainCategoryPiani.php";
    maincategory.onreadystatechange=function() 
    {
        if (maincategory.readyState == 4 && maincategory.status == 200)
                plansMainCat(maincategory.responseText);
    }
    maincategory.open("GET", main, true);
    maincategory.send();
}

function plansMainCat(response)
{
    var arr = JSON.parse(response);
    var barra_grigia = "";
    for(var i = 0; i< arr.length; i++)
    {
        if(i>0)  //il controllo su i è per disabilitare i link non cliccabili
            barra_grigia += "<div class=\"col-md-4\"><a href=\"pianisubcategory.html?id="+ arr[i].id +"\" class=\"btn btn-large disabled\">";
        else
            barra_grigia += "<div class=\"col-md-4\"><a href=\"pianisubcategory.html?id="+ arr[i].id +"\">"
        barra_grigia += arr[i].nome +"</a></div>";
    }
    document.getElementById("barrablu").innerHTML = barra_grigia;
}

function createPlansInformation(arr)
{
    /*
    *bisogna passare un array che contiene:
    * nome, chiamate, messaggi internet, prezzo
    * id
    *
    */
var out ='<div class="col-md-12">'+
        '<div class="row plans-review">'+
            '<div class="hidden-xs col-sm-4"><h1><a href="piano.html?id='+ arr.id +'">'+ arr.nome +'</a></h1></div>'+
            '<div class="col-sm-4"><h2>'+ arr.prezzo +'</h2></div>'+
            '<div class="col-sm-2 buttons red"><h3>Acquista con device</h3></div>'+
            '<a href="buyplans.html?id=' + arr.id + '">'+
                '<div class="col-sm-2 buttons blue"><h3>Attiva con un clik</h3></div>'+
            '</a>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-12 plans-description">';
    if(arr.messaggi != null)
    {
        out +='<div class="row">'+
            '<div class="col-sm-1 col-xs-3 photo">'+
                '<img src="http://guidoantoniomatteo.altervista.org/tim/img/piani/util/sms.png" alt="sms" />'+
            '</div>'+
            '<div class="col-sm-6 col-xs-9 bar">'+
                '<div class="blue" style="width: 80%;"></div>'+
            '</div>'+
            '<div class="col-sm-3 col-xs-12"><h1>'+ arr.messaggi +'</h1></div>'+
            '<div class="col-sm-2 hidden-xs"><h2>Verso tutti</h2></div>'+
        '</div>';
    }
    if(arr.internet != null)
    {
        out +='<div class="row">'+
            '<div class="col-sm-1 col-xs-3 photo">'+
                '<img src="http://guidoantoniomatteo.altervista.org/tim/img/piani/util/internet.png" alt="internet" />'+
            '</div>'+
            '<div class="col-sm-6 col-xs-9 bar">'+
                '<div class="blue" style="width: 30%;"></div>'+
            '</div>'+
            '<div class="col-sm-3 col-xs-12"><h1>'+ arr.internet +'</h1></div>'+
            '<div class="col-sm-2 hidden-xs"><h2>di internet</h2></div>'+
       ' </div>';
    }
    if(arr.chiamate != null)
    {
        out +='<div class="row">'+
            '<div class="col-sm-1 col-xs-3 photo">'+
                '<img src="http://guidoantoniomatteo.altervista.org/tim/img/piani/util/voice.png" alt="chiamate" />'+
            '</div>'+
            '<div class="col-sm-6 col-xs-9 bar">'+
                '<div class="blue" style="width: 60%;"></div>'+
            '</div>'+
            '<div class="col-sm-3 col-xs-12"><h1>'+ arr.chiamate +'</h1></div>'+
            '<div class="col-sm-2 hidden-xs"><h2>di chiamate verso tutti</h2></div>'+
        '</div>';
    }
    out +='</div>';
    
    return out;
    
}

function printAsAssociati(parametro, id)
{
    var maincategory = new XMLHttpRequest();
    var main = "http://guidoantoniomatteo.altervista.org/tim/components/as/getAsAssociati.php";
    maincategory.onreadystatechange=function() 
    {
        if (maincategory.readyState == 4 && maincategory.status == 200)
                asAssociati(maincategory.responseText);
    }
    maincategory.open("POST", main, true);
    maincategory.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    maincategory.send("tabella="+parametro+"&id="+id);
}

function asAssociati(response)
{
    /* Nome, Id delle singole assistenze tecniche associate a "parametro" della funzione
    *  sopra.
    */
    var arr = JSON.parse(response);
    var out = "";
    if(arr.length > 0)
    {
        out += '<h1 class="titolorosso" style="text-align: left;">Assistenza Tecnica</h1>';
        for(var i = 0; i< arr.length; i++)
            out += '<div class=\"row grey-bar\">'+
                        '<div class=\"col-md-12\">' +
                                '<a href=\"assingola.html?id='+arr[i].id+'\">' + arr[i].nome + '</a>'+
                        '</div>'+
                    '</div>';
        document.getElementById("asrelative").innerHTML = out;
    }
}