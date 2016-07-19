$.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() { 
    var xmlhttp = new XMLHttpRequest();
    var url = "http://guidoantoniomatteo.altervista.org/components/piani/getMainCategoryPiani.php";

    xmlhttp.onreadystatechange=function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                myFunction(xmlhttp.responseText);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});

    function myFunction(response) {
        var arr = JSON.parse(response);
        var i;
        var out = "";
        var out2 ="";
        
        for(i = 0; i < arr.length; i++) 
        {
            out += "<div class='col-sm-4 hidden-xs grey-background current-link' style='height: inherit !important;'>";
            if(i>0) //il controllo su i è per disabilitare i link non cliccabili
                out +="<a href=\"pianisubcategory.html?id=" + arr[i].id + "\" class=\"btn btn-large disabled\" >";
            else
                out +="<a href=\"pianisubcategory.html?id=" + arr[i].id + "\" style=\"padding-bottom: 6px;\" >";    //Lo style in questa linea serve per allineare i link disabled con quelli attivi    
            out +="<img src=\"" + arr[i].foto + "\" class=\"center\"/></a></div>";
            out2 +="<div class=\"col-sm-4 blu-menu\">";
            if(i>0) //il controllo su i è per disabilitare i link non cliccabili
                out2 +="<a href=\"pianisubcategory.html?id=" + arr[i].id + "\" class=\"btn btn-large disabled\" >";
            else
                out2 +="<a href=\"pianisubcategory.html?id=" + arr[i].id + "\" >";
                out2 += arr[i].nome + "</a></div>";
                    out += "</div>";
                }
                
                document.getElementById("categorie_grey").innerHTML = out;
                document.getElementById("categorie_blu").innerHTML = out2;
    }