$(document).ready(function(){
  $("#selectionForm").submit(function(event){

    var whichEnd = $('select#focus').val();
    var where = $('select#campus').val();
    var area = $('select#interest').val();
    var company = $('select#org').val();
    var priorities = $('select#values').val();

    if(whichEnd === "front") {
      langRec="Take the UX/UI and design track. Hope you're in Portland, Oregon!");
    } else if (whichEnd === "back" || "mix" && where ==="seattle") {
        langRec="C# or Java would be great for you!");
      } else {
          langRec="Ruby on Rails would be a great starting point!");
        }

    if(company==="corp") {
      langRec = "Java or C# would be a good choice for you."
    } else if (company==="govt") {
      langRec="PHP or Java would be a great option."
    }
  $("langRec").text(langRec);
  $(".output").text();
    
  event.preventDefault();
  });
});
