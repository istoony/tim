$( document ).ready(function() {

            var link=location.href;
            var captured = /id=([^&]+)/.exec(link)[1]; // Value is in [1] ('384' in our case)
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteCategorie.php";

            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

            function myFunction(response) {
                var arr = JSON.parse(response);
                var i;
                var out="";

                for(i = 0; i < arr.length; i++) {
                    out+='<div class="row father-center marginforrow" style="background-color:#F0F0F0"><div class="col-md-2 nopaddingfull nomarginfull child-center"><img class="resize"  src="http://guidoantoniomatteo.altervista.org/tim/' + arr[i].foto + '" style=""alt = "' + arr[i].descrizione + '"></div><div class="col-md-2 child-center nomarginLR nopadding center-block"><h3 class="description-blu text-bold text-center">' + arr[i].descrizione + '</h3></div><div class="center-block" id=' + arr[i].id + ' ></div><div class="col-md-1 child-center"><a href="http://guidoantoniomatteo.altervista.org/tim/offerte/offerte'+ arr[i].id +'.html"><img class="img-responsive child-center arrowpromotion" src="http://guidoantoniomatteo.altervista.org/tim/img/offerte/next.png" alt="freccia tim"></a></div></div>';
                }
                document.getElementById("id01").innerHTML = out;

                var offertePiani = new XMLHttpRequest();
                var piani = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + id;
                offertePiani.onreadystatechange = function () {
                if (offertePiani.readyState == 4 && offertePiani.status == 200)
                    getOffertePiani(offertePiani.responseText);
                }
                offertePiani.open("GET", piani, true);
                offertePiani.send();

                var offerteDispositivi = new XMLHttpRequest();
                var dispositivi = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteDispositivi.php?id=" + id;
                offerteDispositivi.onreadystatechange = function () {
                if (offerteDispositivi.readyState == 4 && offerteDispositivi.status == 200)
                    getOfferteDispositivi(offerteDispositivi.responseText);
                }
                offerteDispositivi.open("GET", dispositivi, true);
                offerteDispositivi.send();

                var offerteSL = new XMLHttpRequest();
                var smartlife = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOfferteSL.php?id=" + id;
                offerteSL.onreadystatechange = function () {
                if (offerteSL.readyState == 4 && offerteSL.status == 200)
                    getOfferteSL(offerteSL.responseText);
                }
                offerteSL.open("GET", smartlife, true);
                offerteSL.send();


            }



            function getOffertePiani(response) {
            var arr = JSON.parse(response);
            var i;
            var out = "";
            for(i = 0; i < arr.length; i++)
            {

                out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="http://guidoantoniomatteo.altervista.org/tim/piani/piano.html?id='+ arr[i].id +'"><div class="promotionbox1" ><h3 class="description-white text-bold">' + arr[i].nome + '</h3><p class="description description-white text-lighter">' + arr[i].descrizionepiano + '</p></div><div class="promotionbox2" ></br><h1 class="description-red">' + arr[i].prezzo + '</h1><p class="description description-black">' + arr[i].descrizioneattivazione + '</p></div></a></div>'
            }
            document.getElementById(1).innerHTML = out;
            }


            function getOfferteDispositivi(response) {
            var arr = JSON.parse(response);
            var i;
            var out = "";
            for(i = 0; i < arr.length; i++)
            {
                out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="http://guidoantoniomatteo.altervista.org/tim/device/singolodevice.html?id='+ arr[i].dispositivo +'"><img class="img-responsive devicesize center-block" src="' + arr[i].path + '" alt="' + arr[i].nome +'"><h2 class="nomargintop">' + arr[i].nome + '</h2><h1 class="nomargintop description-red">' + arr[i].prezzoscontato + '</h1></a></div>';
            }
            document.getElementById(3).innerHTML = out;
            }


            function getOfferteSL(response) {
            var arr = JSON.parse(response);
            var i;

            var out = "";
            for(i = 0; i < arr.length; i++)
            {
                out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="http://guidoantoniomatteo.altervista.org/tim/smart-life/single-smart-life.html?id=' + arr[i].id + '"><div class="promotionbox3" ><img class="img-responsive SLsize" src="http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/' + arr[i].id + '/logo.png" alt="' + arr[i].nome +'"><h2 class="description-black text-bold">' + arr[i].nome + '</h2><h1 class="nomargintop description-red">' + arr[i].prezzoscontato + '</h1><p class="description description-black text-lighter">' + arr[i].attivazionescontato + '</p></div></a></div>';
            }
            document.getElementById(2).innerHTML = out;
            }
});
