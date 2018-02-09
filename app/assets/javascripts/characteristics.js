$(document).ready(function () {
  $('#addCharacteristic').on('click', function () {
    $.ajax({
      type: "GET",
      url: $(this).data("url")
    }).done(function() {
	  console.log(this);
	});
  });
});