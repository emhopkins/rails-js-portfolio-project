$(document).ready(function () {
  $(".js-next").click(function(event) {
    event.preventDefault();
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    $.get("/characteristics/" + nextId + ".json", function(data) {
      console.log(data);
      $(".name").text(data["name"]);
      // re-set the id to current on the link
      $(".js-next").attr("data-id", data["id"]);
    });
  });
});