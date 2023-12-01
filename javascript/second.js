// if (localStorage.getItem("textChanged") === "true") {
//     document.getElementById("text").style.color = "red";
//   }
//   localStorage.setItem("textChanged", "false");

//   if (localStorage.getItem("flag") === "true") {
//     document.getElementById("text").style = localStorage.getItem("style");
//   }
//   localStorage.setItem("flag", "false");

window.onload = function blogSelector() {
    if (localStorage.getItem("hp") == "true") {
      let h1 = document.querySelector('#math');
      h1.style = localStorage.getItem("style");
    } else if (localStorage.getItem("flag") == "true") {
      let p = document.querySelector('#eng');
      p.style = localStorage.getItem("style");
    }
  }
window.onunload = function() {
  localStorage.clear()
}