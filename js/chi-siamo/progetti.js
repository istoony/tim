$( document ).ready(function() {

    var xmlhttp = new XMLHttpRequest();
        var url = "http://guidoantoniomatteo.altervista.org/tim/components/progetti/getProgetti.php";



        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                myFunction(xmlhttp.responseText);
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function myFunction(response) {
            var arr = JSON.parse(response);
            var i;
            var out = "";
            for(i=0; i< arr.length;i++) {
            out += '<div class="row middle-align-block"><div class="col-md-12 "><div class="row father-center"><div class="col-md-4 cn child-center"><img class="img-responsive img-center" src="'+arr[i].foto+'" alt="'+arr[i].nome+' tim"><div class="row"><div class="col-md-12 inner-center"><h2>' + arr[i].nome + '</h2></div></div></div><div class = "col-md-3 child-center"><h2 class="center middle-align-block">'+arr[i].descrizione+'</h2></div><div id="myCarousel' + arr[i].id + '" class="col-md-5 carousel slide child-center" data-ride="carousel"><div class="carousel-inner" role="listbox" id="' + arr[i].id + '"></div><a class="left carousel-control" href="#myCarousel' + arr[i].id + '" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href=\"#myCarousel' + arr[i].id + '" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div></div></div>';
            }
            document.getElementById("id01").innerHTML = out;

            var progettiEvidenza = new XMLHttpRequest();
            var evidenza = "http://guidoantoniomatteo.altervista.org/tim/components/progetti/getProgettiInEvidenza.php";
            progettiEvidenza.onreadystatechange = function () {
            if (progettiEvidenza.readyState == 4 && progettiEvidenza.status == 200)
                getProgettiInEvidenza(progettiEvidenza.responseText);
             }
            progettiEvidenza.open("GET", evidenza, true);
            progettiEvidenza.send();

        }


        function getProgettiInEvidenza(response) {
        var arr = JSON.parse(response);
        var i;
        var j=0;
        var out = "";
        var id = arr[0].idprogetto;
                for(i = 0; i < arr.length; i++)
                {

                    if(id != arr[i].idprogetto)
                    {
                        document.getElementById(id).innerHTML = out;
                        out = "";
                        id = arr[i].idprogetto;
                        j=0;
                    }
                    if (j==0) out+="<div class=\"item active child-center\"><h4 class=\"center text-center\">" + arr[i].descrizioneevidenza + "</h4></div>";
                    else out+="<div class=\"item child-center\"><h4 class=\"center text-center\">" + arr[i].descrizioneevidenza + "</h4></div>";
                    j++;
                }
                document.getElementById(arr[i - 1].idprogetto).innerHTML = out;

    }
});
