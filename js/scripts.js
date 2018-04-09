<<<<<<< HEAD
=======

>>>>>>> fe25de8ee3acaacca8fee643dd06a3f0bb6dc748
//backend
function Pet (name, age, breed, neutered, friendly, exercise, availability){
  this.name= name;
  this.age= age;
  this.breed= breed;
  this.neutered= neutered;
  this.friendly= friendly;
  this.exercise= exercise;
<<<<<<< HEAD
}
=======
};
  
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
>>>>>>> fe25de8ee3acaacca8fee643dd06a3f0bb6dc748
