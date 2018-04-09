

//user interface logic

$(document).ready(function() {
  $("adopted").click(function() { //need to update 'adopted' with whatever the div or id is for adopted animals
    $("adopted").show();
  });

  $("not-adopted").click(function() { //need to update 'adopted' with whatever the div or id is for adopted animals
    $("not-adopted").show();
  });

  $("submit").submit(function(event) {  //need to put in the submit button id/div
    event.preventDefault();
  });
});
