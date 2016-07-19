  $.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {
    $( document ).ready(function() { 
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/as/getMainCategory.php";

            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
    });
  });

            function myFunction(response) {
                var arr = JSON.parse(response);
                var i;
                var out = "";
                var out2 = "";
                
                for(i = 0; i < arr.length; i++) 
                {
                    out += "<div class=\"col-sm-3\">"+
                        "<a href=\"assubcategory.html?id=" + arr[i].id + "\" >" +
                            arr[i].titolo + 
                        "</a></div>"; 
                    out2 += "<div class=\"col-sm-3\" style=\"height: inherit !important;\">" +
                            "<a href=\"assubcategory.html?id=" + arr[i].id + "\" >" +
                                    "<img src=\"" + arr[i].foto + "\" class=\"center\"/>"+
                                "</a>"+
                            "</div>";
                }
                
                document.getElementById("categorie_blu").innerHTML = out;
                document.getElementById("categorie_grey").innerHTML = out2;
            }