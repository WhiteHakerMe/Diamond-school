// function changeBackground() {
//     // Get the second page
//     const secondPage = window.open("courses.html", "_blank");
//     // Wait for the second page to load
//     secondPage.onload = function() {
//         // Change the background color of the body element on the second page
//         secondPage.document.body.style.backgroundColor = "red";
//         const chemistText = document.getElementById("chemistry");
//         chemistText.style.display = "none   ";
//     }
// }

// function setText() {
//   // localStorage.setItem("textChanged", "true");
//   document.getElementById("text").addEventListener("click", function() {
//     localStorage.setItem("flag", "true");
//     localStorage.setItem("style", "color: red");
//   });
// }

// function changeTextStyle() {
//   // Add an event listener to the text on the first page
//   document.getElementById("text-on-first-page").addEventListener("click", function() {
//     // Set the flag and style in localStorage
//     localStorage.setItem("textStyleFlag", "true");
//     localStorage.setItem("textStyle", "color: red; font-size: 18px;");
//   });

//   // Check if the flag is set on the second page
//   if (localStorage.getItem("textStyleFlag") === "true") {
//     // Apply the style to the text on the second page
//     document.getElementById("text-on-second-page").style.cssText = localStorage.getItem("textStyle");
//     // Reset the flag to prevent the text from changing on refresh
//     localStorage.setItem("textStyleFlag", "false");
//   }
// }

// function changeStyle() {
//     localStorage.setItem("flag", "true");
//     localStorage.setItem("style", "display: block");
//   };

//   function changingStyle() {
//     localStorage.setItem("hp", "true");
//     localStorage.setItem("style", "display: block");
//   };

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

