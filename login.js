function validateLogin() {
  var login = document.getElementById("typeEmailX").value;
  var password = document.getElementById("typePasswordX").value;
  if (login != "" && password != "") {
    console.log(`${login}, ${password}`);
    window.location.href = "orders.html"
  }
}
