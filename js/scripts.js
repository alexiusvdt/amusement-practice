// nonlistener version of listener below
// window.onload = function()
//   let form = document.querySelector("form");
//   form.addEventListener("submit", function(event) {
//     // what happens on submit goes here
//     // then we strip the class out
//     document.querySelector("div#,<target class/es>").removeAttribute("class");
//     //preventdefault to stop reload
//     event.preventDefault();
//   });
// With a querySelector statement, you can select an element based on a CSS selector. 
//This means you can select elements by ID, class, or any other type of selector. 
//Using the getElementById method, you can only select an element by its ID. 
//Generally, you should opt for the selector that most clearly gets the job done

window.addEventListener("load", function() {
  //building reset button
  function resetClass() {;
    document.getElementById("swings").setAttribute("class", "hidden");
    document.getElementById("coaster").setAttribute("class", "hidden");
    document.getElementById("tower").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");  
    };

  function rideSelect() {;
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    if (age && height) {
      if (age >= 12 && height >= 60) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
        document.getElementById("tower").removeAttribute("class");
      } else if (age >= 12 || height >= 48) {
        document.getElementById("swings").removeAttribute("class");
        document.getElementById("coaster").removeAttribute("class");
      } else if (age >= 5) {
        document.getElementById("swings").removeAttribute("class");
      } else {
        document.getElementById("sorry").removeAttribute("class");
      }
    };
  };

    // variable declaration
  let form = document.querySelector("form");
  //creating the submit listener and specifying its function
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    resetClass();
    rideSelect();   
  });
});