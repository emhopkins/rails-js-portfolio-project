$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	    alert( "Data Loaded: " + data );
	    console.log(data);
	  });
		$('#buildings').html()
	});	
});

