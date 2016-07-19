$( document ).ready(function() {
	
	var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var id = captured ? captured : 'id';
    
    //GET CATEGORY NAME
    $.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=deviceSingleCategory&id="+id, 
		dataType: "json",
		success: function(result){
			var element = result[0];
			var myHtml = "<div><h3>SCEGLI<br/>IL TUO "+element.nome+'</h3></div>';
			$("#main-text").append(myHtml);
		}
	});
    
    //GET BRAND
    $.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=deviceBrand", 
		dataType: "json",
		success: function(result){

			var myHtml ="";
			
			$.each(result, function(index, element) {					
				myHtml += '<input type="checkbox" name="brand" value="'+element.id+'"/>'+element.nome+'<br/>';
			});
			
			$("#devices-brand").append(myHtml); 
			
			setCheckbox("#devices-brand");
		}
	});
    
    //GET DISPLAY
    $.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=deviceDisplay", 
		dataType: "json",
		success: function(result){

			var myHtml ="";
			
			$.each(result, function(index, element) {					
				myHtml += '<input type="checkbox" name="brand" value="'+element.display+'"/>'+element.display+'<br/>';
			});
			
			$("#devices-display").append(myHtml); 
			
			setCheckbox("#devices-display");
		}
	});
    
    
    //GET DEVICES
    
	
	
	function showCategories(result) {

		var myHtml = "";
		
		$.each(result, function(index, element) {		
			
			
        });
		

	}
	
	function setCheckbox(id) {
		$(id+" input:checkbox").on('click', function() {
			  // in the handler, 'this' refers to the box clicked on
			  var $box = $(this);
			  if ($box.is(":checked")) {
			    // the name of the box is retrieved using the .attr() method
			    // as it is assumed and expected to be immutable
			    var group = id+" input:checkbox[name='" + $box.attr("name") + "']";
			    // the checked state of the group/box on the other hand will change
			    // and the current value is retrieved using .prop() method
			    $(group).prop("checked", false);
			    $box.prop("checked", true);
			  } else {
			    $box.prop("checked", false);
			  }
			});
		
		$('input:checkbox').unbind('change');
		$('input:checkbox').change(function() {
	        if($(this).is(":checked")) {
	        	updateQuery();
	        }     
	    });
		
	
	}
	
	
	
});

function updateQuery() {
	/*var selected = [];
	$('#devices-menu input:checked').each(function() {
	    selected.push($(this).attr('name'), $(this).attr('value'));
	});
	alert(selected.brand);*/
	
	var display = $('#devices-display input:checked').attr('value') ;
	if(display === undefined)
		display = "";
	var brand = $('#devices-brand input:checked').attr('value') ;
	if(brand === undefined)
		brand = "";
	
	var urlTemp = "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=getDevices&display="+display+'&brand='+brand;
	
	$.ajax({
		url: urlTemp, 
		dataType: "json",
		success: function(result){

			alert("p");
		}
	});
	

}