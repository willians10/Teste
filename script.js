async function toggleMode() {
  var text = document.getElementById("text")
  if (text.classList.contains("white-text")) {
    text.classList.remove("white-text")
    text.classList.add("grey-text")
  } else {
    text.classList.remove("grey-text")
    text.classList.add("white-text")
  }
  const data = await searchProfileGitHub()
  changeElement(data)
}
async function searchProfileGitHub() {
  const response = await fetch("https://api.github.com/users/willians10")
  const data = await response.json()
  return data
}
function changeElement(data) {
  var userElement = document.getElementById("user-github")
  var textUser = document.createElement("p")
  textUser.textContent = data.name
  userElement.append(textUser)
}
