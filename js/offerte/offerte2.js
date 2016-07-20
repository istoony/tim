$( document ).ready(function() {

    var offerteSL = new XMLHttpRequest();
    var smartlife = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteSL.php?id=" + 1;
    offerteSL.onreadystatechange = function () {
    if (offerteSL.readyState == 4 && offerteSL.status == 200)
        getOfferteSL(offerteSL.responseText);
    }
    offerteSL.open("GET", smartlife, true);
    offerteSL.send();



    function getOfferteSL(response) {
    var arr = JSON.parse(response);
    var i;

    var out = "";
    for(i = 0; i < arr.length; i++)
    {
        out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="single-smart-life.html?id=' + arr[i].id + '"><div class="promotionbox3" ><img class="img-responsive SLsize" src="http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/' + arr[i].id + '/logo.png" alt="' + arr[i].nome +'"><h2 class="description-black text-bold">' + arr[i].nome + '</h2><h1 class="nomargintop description-red">' + arr[i].prezzoscontato + '</h1><p class="description description-black text-lighter">' + arr[i].attivazionescontato + '</p></div></a></div>';
    }
    document.getElementById(1).innerHTML = out;
    }
});
