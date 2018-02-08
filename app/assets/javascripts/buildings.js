$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	  	$('#buildings').html("");
	    console.log(data);
	    $.each(data, function(index, value) {
			  console.log(value["name"]);
			  var buildingPath = url + '/' + value["id"]
			  $('#buildings').append(`<div><a href='${buildingPath}'>${value["name"]}</a></div>`)
			});
	  });
	});	
});
