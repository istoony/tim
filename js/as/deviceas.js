  $.getScript('http://guidoantoniomatteo.altervista.org/tim/js/standardimport.js', function() {
            printMainCat();
            
            var url = location.href;
            var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
            var result = captured ? captured : 'id';
            var id = result;
            var xmlhttp = new XMLHttpRequest();
            var url = "http://guidoantoniomatteo.altervista.org/tim/components/as/getDeviceAs.php?id="+ id;
            
            printSecondCatAs(id);
           
            
            xmlhttp.onreadystatechange=function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                    myFunction(xmlhttp.responseText);
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
           
            function myFunction(response) 
            {
                var arr = JSON.parse(response);
                var i;
                var out = "";
                document.getElementById("astitle").innerHTML = arr[0].astitle;
                for(i=0; i< arr.length; i++)
                {   
                    out +='<div class="col-sm-3">'+
                            '<div class="row correlati">'+
                                '<div class="col-md-12">'+
                                    '<a href="http://guidoantoniomatteo.altervista.org/tim/device/singolodevice.html?id='+ arr[i].id +'">'+
                                        '<img src="'+arr[i].path+'" alt="'+arr[i].nome+'" />'+
                                    '</a>'+
                                '</div>'+
                                '<div class="col-md-12"><h3>'+ arr[i].nome +'</h3></div>'+
                            '</div>'+
                          '</div>';
                }
                document.getElementById("descrizione").innerHTML = out;
            }
            
  });