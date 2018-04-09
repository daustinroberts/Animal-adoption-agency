

//user interface logic

$(document).ready(function() {
  $("animal").click(function () { //need to update 'animal' with whatever the div is for each animal
    $("animal-info").show();
  });

  $("adopted").click(function() { //need to update 'adopted' with whatever the div or id is for adopted animals
    $("adopted").show();
  });

  $("not-adopted").click(function() { //need to update 'not-adopted' with whatever the div or id is for adopted animals
    $("not-adopted").show();
  });

  $("submit").submit(function(event) {  //need to put in the 'submit' button id/div
    event.preventDefault();
  });
});
