$( document ).ready(function() {

    var id=1;
    var offerteDispositivi = new XMLHttpRequest();
    var dispositivi = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteDispositivi.php?id=" + id;
    offerteDispositivi.onreadystatechange = function () {
    if (offerteDispositivi.readyState == 4 && offerteDispositivi.status == 200)
        getOfferteDispositivi(offerteDispositivi.responseText);
    }
    offerteDispositivi.open("GET", dispositivi, true);
    offerteDispositivi.send();

    function getOfferteDispositivi(response) {
        var arr = JSON.parse(response);
        var i;
        var out = "";
        for(i = 0; i < arr.length; i++){
            out+= '<div class="col-md-3 promotiontile center-block paddingfixer"><a href="singolodevice.html?id='+ arr[i].dispositivo +'"><img class="img-responsive devicesize center-block" src="' + arr[i].path + '" alt="' + arr[i].nome +'"><h2 class="nomargintop">' + arr[i].nome + '</h2><h1 class="nomargintop description-red">' + arr[i].prezzoscontato + '</h1> </a></div>';
        }
        document.getElementById(1).innerHTML = out;
    }
});
