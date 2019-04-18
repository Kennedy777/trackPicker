$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var company = parseInt($("select#company").val());
    var interests = parseInt($("select#interests").val());
    var cuisine = parseInt($("select#cuisine").val());
    var where = parseInt($("select#where").val());
    var pet = parseInt($("select#pet").val());
    var total = company + interests + cuisine + pet + where;

    //business logic//
    if (total <= 7) {
      $(".jumbotron").show();
      $(".langCSS").fadeIn();
      } else if (total > 8 && total <= 12) {
      $(".jumbotron").show();
      $(".rubyResult").fadeIn();
      } else if (total > 13 && total <= 15) {
      $(".jumbotron").show();
      $(".cResult").fadeIn();
      }

    });
});
