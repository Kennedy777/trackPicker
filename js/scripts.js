$(document).ready(function(){
  
  $("form").submit(function(event)
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

