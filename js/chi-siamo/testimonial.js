$( document ).ready(function() {
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
            out += "<div class=\"row\"><div class=\"col-md-12\">"+ "<div style=\"z-index: 2;\"><img class=\"img-responsive\"src=\" " + arr[i].foto + "\" alt=\" "+ arr[i].nome +"tim\"></div><div class=\"inner-presentation\"><div style=\"z-index: 5;\"><h1><br/>" + arr[i].nome + "</h1></div><div style=\"z-index: 5;\"><h2>" + arr[i].frase1 + "</h2><h2>" + arr[i].frase2 + "</h2></div></div><div style=\"z-index: 5; background-color: #004890;\">" + "<a href=\" " +arr[i].linkspot +"\" class=\"btn btn-primary\">guarda lo spot</a>"+"</div></div></div>";
        }
        document.getElementById("id01").innerHTML = out;
    }
});
