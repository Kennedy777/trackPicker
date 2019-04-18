$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var company = parseInt($("select#company").val());
    var interests = parseInt($("select#interests").val());
    var cuisine = parseInt($("select#cuisine").val());
    var where = parseInt($("select#where").val());
    var pet = parseInt($("select#pet").val());
    var total = company + interests + cuisine + pet + where;

    console.log(total);
    //business logic//
    if (total <= 7) {
      $("#jumbotron").show();
      $(".langCSS").show();
      $(".rubyResult").hide();
      $(".cResult").hide();
      } else if (total > 8 && total <= 12) {
      $("#jumbotron").show();
      $(".rubyResult").show();
      $(".cResult").hide();
      $(".langCSS").hide();
      } else if (total > 13 && total <= 15) {
      $("#jumbotron").show();
      $(".cResult").show();
      $(".langCSS").hide();
      $(".rubyResult").hide();
     }
   });
});
