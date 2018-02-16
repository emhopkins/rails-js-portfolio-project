$(document).ready(function () {

	$('button#loadBuildings').click(function(event) {
		var url = $(this).data("url")
	$.get(url)
	  .done(function( data ) {
	  	$('#buildings').html("");

	  	// filtering from live coding
	  	// const fillteredData = data.filter(element => element.name === 'Boathouse')

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

	this.apartments = building.apartments.map(e => new Apartment(e))
};

Building.prototype.formatDisplay = function() {
	var apartmentsHtml = ""
	$.each(this.apartments, function() {
		var apartmentListItem = this.formatDisplay()
		apartmentsHtml += apartmentListItem
	});
	var buildingHtml = `<div><a href='${this.buildingUrl}'>${this.name}</a> located at address: ${this.address}</div>
											<div>Apartments</div>
											<ul>${apartmentsHtml}</ul>`;
	return buildingHtml;
};

function Apartment(apartment) {
	this.id = apartment.id
	this.unit = apartment.unit
	this.description = apartment.description
};

Apartment.prototype.formatDisplay = function() {
	console.log(this)
	var apartmentHtml = `<li>Unit: ${this.unit}, Description: ${this.description}</li>`
	return apartmentHtml;
};