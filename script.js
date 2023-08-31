// This function is meant to discourage users from opening the console
window.oncontextmenu = function () {
  return false;
};

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    // F12 key
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    // Ctrl + Shift + I keys
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    // Ctrl + Shift + C keys
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    // Ctrl + Shift + J keys
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    // Ctrl + U keys
    return false;
  }
};

function areDevToolsOpen() {
  const threshold = 160; // A guessed threshold for dev tools pane height/width
  const outerAspect = window.outerWidth / window.outerHeight;
  const innerAspect = window.innerWidth / window.innerHeight;
  const aspectDifference = outerAspect - innerAspect;

  return (
    aspectDifference >
    threshold / Math.min(window.outerHeight, window.outerWidth)
  );
}

// Periodically check if developer tools might be open
setInterval(function () {
  if (areDevToolsOpen()) {
    document.body.style.opacity = "0";
    window.location.href = "https://www.google.com";
  } else {
    document.body.style.opacity = "1";
  }
}, 1000);

if (window.innerHeight < 600) {
  document.getElementById("car-container").style.marginTop = "-60px";
  document.getElementById("car-container").style.height = "70vh";
  document.getElementById("customization").style.height = "45vh";
}
