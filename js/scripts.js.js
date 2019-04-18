$(document).ready(function(){
  $("#selectionForm").submit(function(event){
    event.preventDefault();
    var bizType = parseInt($("select#bizType").val());
    var interests = parseInt($("select#interests").val());
    var cuisine = parseInt($("select#cuisine").val());
    var where = parseInt($("select#where").val());
    var pet = parseInt($("select#pet").val());
    var total = bizType + interests + cuisine + people + where;

    //business logic//
    if (total <= 7) {
      $("#result").show();
      $(".langCSS").fadeIn();
      } else if (total > 8 && total <= 12) {
      $("#result").show();
      $(".rubyResult").fadeIn();
      } else if (total > 13 && total <= 15) {
      $("#result").show();
      $(".cResult").fadeIn();
    }
  });
});
