//Select elements
const background = document.getElementById("background");
const toaster = document.getElementById("toaster");
const popUp = document.getElementById("popUp");

//Create event listener for background color change
background.addEventListener("click", function () {
  console.log("buttonClicked");

  document.body.style.backgroundColor = "lightblue";
});

//Create event listener for toaster message
toaster.addEventListener("click", function () {
  //Remove hidden class from toaster
  document.querySelector("p").classList.remove("hidden");
});

//Create popup messsaeg
popUp.addEventListener("click", function () {
  alert("This is a pop up message");
});
