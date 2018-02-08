$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	  	$('#buildings').html("");
	    $.each(data, function(index, value) {
			  var buildingPath = url + '/' + value["id"]
			  $('#buildings').append(`<div><a href='${buildingPath}'>${value["name"]}</a></div>`)
			});
	  });
	});	
});
