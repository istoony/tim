$( document ).ready(function() {

    smallMenuLoaded();

    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/tim/components/testimonial/getTestimonial.php";

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
            out += "<div class=\"row\"><div class=\"col-md-12\">"+ "<div style=\"z-index: 2;\"><img class=\"img-responsive\"src=\" " + arr[i].foto + "\" alt=\" "+ arr[i].nome +"tim\"></div><div class=\"inner-presentation\"><div style=\"z-index: 5;\">"+'<div class="row" style="height: 35px;"></div>'+"<h1>" + arr[i].nome + "</h1></div><div style=\"z-index: 5;\"><h2>" + arr[i].frase1 + "</h2><h2>" + arr[i].frase2 + "</h2></div></div>";
            if(arr[i].linkintervista != ("")){
                out+="<div style=\"z-index: 6; bottom: 10px;right: 170px;position:absolute;\">" + "<a href=\" " +arr[i].linkintervista +"\" target=\"_blink\" class=\"btn btn-danger\" style=\"color:white;\">GUARDA L&#39;INTERVISTA</a>"+"</div>";
            }
            out+= "<div style=\"z-index: 6; bottom: 10px;right: 20px;position:absolute;\">" + "<a href=\" " +arr[i].linkspot +"\" class=\"btn btn-primary\" target=\"_blink\" style=\"color:white;\">GUARDA LO SPOT</a>"+"</div></div></div>";
        }
        document.getElementById("id01").innerHTML = out;
    }
});
