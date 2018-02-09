$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	  	$('#buildings').html("");
	    $.each(data, function(index, value) {
	    	var newBuilding = new Building(value, url);
	    	var buildingHtml = newBuilding.formatDisplay();
			  $('#buildings').append(buildingHtml)
			});
	  });
	});	
});

function Building(building, url) {
	this.id = building.id
	this.name = building.name
	this.address = building.address
	this.buildingUrl = url + '/' + building.id
};

Building.prototype.formatDisplay = function() {
	var postHtml = `<div><a href='${this.buildingUrl}'>${this.name}</a> located at address: ${this.address}</div>`;
	return postHtml;
};