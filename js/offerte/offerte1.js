$( document ).ready(function() {

    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/piani/getMainCategoryPiani.php";

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

            out+='<div class="row father-center marginforrow" style="background-color:#F0F0F0"><div class="col-md-1 child-center nomarginLR nopadding"><h3 class="description-blu text-bold text-center">' + arr[i].nome + '</h3></div><div id=' + arr[i].id + ' ></div><div class="col-md-1 child-center"></div></div>';

        }
        document.getElementById("id01").innerHTML = out;
        var mobile = new XMLHttpRequest();
        var mobileresponse = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + 1;
        mobile.onreadystatechange = function () {
        if (mobile.readyState == 4 && mobile.status == 200)
            getOfferteMobile(mobile.responseText);
        }
        mobile.open("GET", mobileresponse, true);
        mobile.send();

        var fisso = new XMLHttpRequest();
        var fissoresponse = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + 2;
        fisso.onreadystatechange = function () {
        if (fisso.readyState == 4 && fisso.status == 200)
            getOfferteFisso(fisso.responseText);
        }
        fisso.open("GET", fissoresponse, true);
        fisso.send();

        var mobilefisso = new XMLHttpRequest();
        var mobilefissoresponse = "http://guidoantoniomatteo.altervista.org/tim/components/offerte/getOffertePiani.php?id=" + 3;
        mobilefisso.onreadystatechange = function () {
        if (mobilefisso.readyState == 4 && mobilefisso.status == 200)
            getOfferteMobileFisso(mobilefisso.responseText);
        }
        mobilefisso.open("GET", mobilefissoresponse, true);
        mobilefisso.send();
    }


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
        document.getElementById(1).innerHTML = out;
    }

    function getOfferteFisso(response) {
        var arr = JSON.parse(response);
        var i;
        var out = "";
        for(i = 0; i < arr.length; i++)  {

            out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="piano.html?id='+ arr[i].id +'"><div class="promotionbox1" ><h3 class="description-white text-bold text">' + arr[i].nome + '</h3><p class="description description-white text-lighter">' + arr[i].descrizionepiano + '</p></div><div class="promotionbox2" ></br><h1 class="description-red">' + arr[i].prezzo + '</h1><p class="description description-black">' + arr[i].descrizioneattivazione + '</p></div></a></div>';
        }
        if(arr.length == 0){

            out+='<div class="col-md-11 child-center"><h2 class="description description-red text-center">Al momento non sono presenti offerte <br>per questa categoria di piani</h1></div>';
        }
        document.getElementById(2).innerHTML = out;
    }

    function getOfferteMobileFisso(response) {
        var arr = JSON.parse(response);
        var i;
        var out = "";
        for(i = 0; i < arr.length; i++)  {

            out+= '<div class="col-md-3 nomarginfull promotiontile"><a href="piano.html?id='+ arr[i].id +'"><div class="promotionbox1" ><h3 class="description-white text-bold text">' + arr[i].nome + '</h3><p class="description description-white text-lighter">' + arr[i].descrizionepiano + '</p></div><div class="promotionbox2" ></br><h1 class="description-red">' + arr[i].prezzo + '</h1><p class="description description-black">' + arr[i].descrizioneattivazione + '</p></div></a></div>';
        }
        if(arr.length == 0){

            out+='<div class="col-md-11 child-center"><h2 class="description description-red text-center">Al momento non sono presenti offerte <br>per questa categoria di piani</h1></div>';
        }
        document.getElementById(3).innerHTML = out;
    }
});
