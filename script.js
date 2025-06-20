document.querySelector(".login-box").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login functionality will be added later.");
});
function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "flex";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "flex";
}
