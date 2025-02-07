const navbar = document.querySelector(".js-navbar-body");

 fetch("../Header/Navbar.html")
 .then(response => response.text())
 .then(data => {
  console.log(data);
  document.querySelector(".hero").prepend(data)
  console.log(document.querySelector(".hero").innerHTML);
});

