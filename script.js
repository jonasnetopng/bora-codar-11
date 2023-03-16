function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const img = document.getElementById("eye-visible");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    img.src = "/assets/img/eye.png";
  } else {
    passwordInput.type = "password";
    img.src = "/assets/img/eye-off.png";
  }
}
