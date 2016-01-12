$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $(".receipt").show();

    event.preventDefault();
  });

});
