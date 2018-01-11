var color = "Blue"
function favoriteColor() {
  color = prompt("Your favorite color?", color);
}

function favoriteAlert() {
  alert(color);
}

function tellTime() {
  var now = new Date();
  var hours = now.getHours();
  var timeIndicator = "a.m."
  if (hours > 12) {
    hours -= 12;
    timeIndicator = "p.m."
  }
  alert("Current time: " + hours + ":" + now.getMinutes() + " " + timeIndicator);
}