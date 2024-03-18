function toggleMode() {
  var text = document.getElementById("text")
  if (text.classList.contains("white-text")) {
    text.classList.remove("white-text")
    text.classList.add("grey-text")
  } else {
    text.classList.remove("grey-text")
    text.classList.add("white-text")
  }
}