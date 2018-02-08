$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	    console.log(data);
	  });
		$('#buildings').html()
	});	
});

