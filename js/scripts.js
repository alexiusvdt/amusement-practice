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
    //declaring variables
    let form = document.querySelector("form");
    //creating the submit listener and specifying its function
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      function hideResultsAndError();
      //code to hide previous stuff here
      const age = parseInt(document.querySelector("input#age").value);
      const height = parseInt(document.querySelector("input#height").value);
      //start elif tree
      if (age && height) {
        if (age >= 12 && height >= 60) {
          document.querySelector("div#<targetclass>").removeAttribute("class");
          document.querySelector("div#<targetclass>").removeAttribute("class");
          document.querySelector("div#<targetclass>").removeAttribute("class");

        }
      }
    // removing the class & preventing default
    document.querySelector("div#<targetclass>").removeAttribute("class");
    event.preventDefault();
    });
  });