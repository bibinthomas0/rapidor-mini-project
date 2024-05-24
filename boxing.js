$(document).ready(function () {
  let health = 100;
  $("#punch-button").click(function () {
    if (health > 0) {
      health -= 20;
      $("#health-bar").css("width", health + "px");
    }
if (health<1){
  $('#bag').attr('src','images/bag-burst.png');
}

  });
  $("#reset-button").click(function () {
    health = 100;
    $("#health-bar").css("width", health + "px");
    $('#bag').attr('src','images/bag.png');
  });
});
