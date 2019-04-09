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
  else if(company==="corp"){
  $("#corJavaResult").show();
  }
 else if (company==="startUp" || priorities==="foosball"){
 $("#rubyResult").show();
 }
 else if(whichEnd != "front" && where==="pdx") {
  $("#rubyResult").show();
   
   }else{
    $("#corJavaResult").show();
   })
  });
});
