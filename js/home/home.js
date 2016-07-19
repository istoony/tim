  $.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {

        $( document ).ready(function() {
        var mobile = new XMLHttpRequest();
        var mobileresponse = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + 1;
        mobile.onreadystatechange = function () {
        if (mobile.readyState == 4 && mobile.status == 200)
            getOfferteMobile(mobile.responseText);
        }
        mobile.open("GET", mobileresponse, true);
        mobile.send();

        function getOfferteMobile(response) {
            var arr = JSON.parse(response);
            var i;
            var out = "";
            for(i = 0; i < arr.length; i++)  {

                out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="piano.html?id='+ arr[i].id +'"><div class="promotionbox1" ><h3 class="description-white text-bold text">' + arr[i].nome + '</h3><p class="description description-white text-lighter">' + arr[i].descrizionepiano + '</p></div><div class="promotionbox2" ></br><h1 class="description-red">' + arr[i].prezzo + '</h1><p class="description description-black">' + arr[i].descrizioneattivazione + '</p></div></a></div>';
            }
            if(arr.length == 0){

                out+='<div class="col-md-11 child-center"><h2 class="description description-red text-center">Al momento non sono presenti offerte <br>per questa categoria di piani</h1></div>';
            }
            document.getElementById("piani").innerHTML = out;
        }

        var offerteSL = new XMLHttpRequest();
        var smartlife = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteSL.php?id=" + 99;
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
            out+= '<div class="col-md-5 no-padding-right-left resize"><img src="http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/' + arr[i].id + '/home.png"></div><a href="smart-life-single.html?id=' + arr[i].id + '"><div class="col-md-7 background-blu promotionSL center-block"><div class="row"><div class="promotionboxSLsmall1"><h2 class="description-gray text-bold">Scegli</h2><h1 class="description-blu text-bold">' + arr[i].nome + '</h1><h3 class=" description text-center">' + decodeHTMLEntities(arr[i].descrizioneshort) + '</h3></div><div class="promotionboxSLsmall2 resize"><img class="img-responsive child-center arrowpromotion" src="http://guidoantoniomatteo.altervista.org/tim/img/offerte/next.png" alt="freccia tim"><p class="description description-red">Per saperne di più</p></div></div></div></a>';
        }
        document.getElementById("smart-life").innerHTML = out;
        }


        var consigliato = new XMLHttpRequest();
        var consigliatoresponse = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + -1;
        consigliato.onreadystatechange = function () {
        if (consigliato.readyState == 4 && consigliato.status == 200)
            getOfferteConsigliato(consigliato.responseText);
        }
        consigliato.open("GET", consigliatoresponse, true);
        consigliato.send();

        function getOfferteConsigliato(response) {
            var arr = JSON.parse(response);
            var i;
            var out = "";
            for(i = 0; i < arr.length; i++)  {

                out+= '<a href="piano.html?id='+ arr[i].id +'"><div class="col-md-7 background-blu promotionSL center-block"><div class="row"><div class="promotionboxSLsmall1"><h2 class="description-gray text-bold">Scegli</h2><h1 class="description-blu text-bold">' + arr[i].nome + '</h1><h3 class=" description text-center">' + decodeHTMLEntities(arr[i].descrizionepiano) + '</h3><h2 class="description-red text-bold">' + arr[i].prezzo + '</h2></div><div class="promotionboxSLsmall2 resize"><img class="img-responsive child-center arrowpromotion" src="http://guidoantoniomatteo.altervista.org/tim/img/offerte/next.png" alt="freccia tim"><p class="description description-red">Per saperne di più</p></div></div></div></a>';
            }
            if(arr.length == 0){

                out+='<div class="col-md-11 child-center"><h2 class="description description-red text-center">Al momento non sono presenti offerte <br>per questa categoria di piani</h1></div>';
            }
            document.getElementById("pianoconsigliato").innerHTML = out;
        }

        var offerteDispositivi = new XMLHttpRequest();
        var dispositivi = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteDispositivi.php?id=" + -1;
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
        for(i = 0; i < arr.length; i++)
        {
            out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="singolodevice.html?id='+ arr[i].dispositivo +'"><img class="img-responsive devicesize center-block" src="' + arr[i].path + '" alt="' + arr[i].nome +'"><h2 class="nomargintop">' + arr[i].nome + '</h2><h1 class="nomargintop description-red">' + arr[i].prezzoscontato + '</h1></a></div>';
        }
        document.getElementById("dispositiviconsigliato").innerHTML = out;
        }

        });
  });
