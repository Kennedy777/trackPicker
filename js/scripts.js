$(document).ready(function(){
  $("#selectionForm").submit(function(event){
    event.preventDefault();
    var whichEnd = $("input:radio[name=focusArea]:checked").val();
    var where = $("input:radio[name=location]:checked").val();
    var area = $("input:radio[name=interest]:checked").val();
    var company = $("input:radio[name=bizType]:checked").val();
    var priorities = $("input:radio[name=whatIsImpt]:checked").val();

//business logic//
  if(whichEnd === "front") {
  $("#frontResult").show();
   }
  if(whichEnd != "front" && company==="corp"){
  $("#corJavaResult").show();
  }
 if (company !="startUp"){
 $("#rubyResult").fadeIn("slow");
 }
  if(whichEnd != "front" && priorities==="foosball") {
  $("#rubyResult").show();
   }else{
    $("#corJavaResult").show();
   }
  });
});
