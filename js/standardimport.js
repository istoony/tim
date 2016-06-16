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
    var main = "http://guidoantoniomatteo.altervista.org/components/as/getMainCategory.php";
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
        out += "<div class=\"col-md-3\">" +
                    "<a href=\"asmaincategory.html?id=" + arr[i].id +"\">" + arr[i].titolo +
                        "</a>";
        out += "</div>";
    }
    document.getElementById("categorie").innerHTML = out;
} 

function printSecondCatAs(id)
{
    var maincategory = new XMLHttpRequest();
    var main = "http://guidoantoniomatteo.altervista.org/components/as/getSecondCat.php?id="+ id;
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
    barra_grigia  = "<div class=\"col-md-4\"><a href=\"assubcategory.html?id="+ arr[0].categoria +"\">Altre Domande</a></div>";
    if(arr[0].numfaq > 0)
        barra_grigia += "<div class=\"col-md-4\">"+
                                "<a href=\"faqassistenza.html?id=" + arr[0].id +"\">FAQ</a>"+
                        "</div>";
    if(arr[0].numdisp> 0)
        barra_grigia += "<div class=\"col-md-4\">"+
                            "<a href=\"deviceassistenza.html?id=" + arr[0].id +"\">Dispositivi"+
                        "</a></div>";
    document.getElementById("barragrigia").innerHTML = barra_grigia;
}