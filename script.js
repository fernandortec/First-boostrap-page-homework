document.getElementById("btn").onclick = () => {
  document.querySelector("h3").innerHTML = 'Não entre na sua conta'
  document.querySelector("input").placeholder = "Don't enter email"
  document.querySelector("input").type = 'password'
  document.querySelector("input").style.borderColor = 'green'
  document.querySelector("input").style.backgroundColor = '#f0f0f5'
};

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault()
}
