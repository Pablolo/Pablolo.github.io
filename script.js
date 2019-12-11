/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("segundomenu");
  if (x.className === "youtube-nav") {
    x.className += "responsive";
  } else {
    x.className = "youtube-nav";
  }
}