$(document).ready(function(){
  $("form").submit(function(event){$('#quest1 #submit').click() {
   $('.quizForm').hide();
   $('#quest2').fadeIn(200);
   return false;
  }

$('#quest2 #submit').click() {
  $('.quizForm').hide();
  $('#quest3').fadeIn(300);
  return false;
  }

$('#quest3 #submit').click() {
  $('.quizForm').hide();
   $('quest4').fadeIn(300);
   return false;
 }
$('#quest4 #submit').click() {
  $('.quizForm').hide();
  $('#quest5').fadeIn(300);
  return false;
 }

  $('#quest5 #submit').click() {
    $('.quizForm').hide();
    $('#result').fadein(300)

  }
    
    $('#quest1 #submit').click() {
   $('.quizForm').hide();
   $('#quest2').fadeIn(200);
   return false;
  }

$('#quest2 #submit').click() {
  $('.quizForm').hide();
  $('#quest3').fadeIn(300);
  return false;
  }

$('#quest3 #submit').click() {
  $('.quizForm').hide();
   $('quest4').fadeIn(300);
   return false;
 }
$('#quest4 #submit').click() {
  $('.quizForm').hide();
  $('#quest5').fadeIn(300);
  return false;
 }

  $('#quest5 #submit').click() {
    $('.quizForm').hide();
    $('#result').fadein(300)
  }

    var whichEnd = $('input[name=endType]:checked').val();
    var where = $('input[name=location]:checked').val();
    var langType = $('input[progType]:checked').val();
    var company = $('input[bizType]:checked').val();

    if(whichEnd === "front") {
      $(".result").text("Take the UX/UI and design track. Hope you're in Portland, Oregon!");
    } else if (whichEnd === "back" || money === "mix") {
      if(company === "corp") {
        $(".result").text("C# or Java would be great for you!");
      } else { 
            $(".result").text("Ruby on Rails would be a great starting point!");
        }
      }

    event.preventDefault();
  });
});

