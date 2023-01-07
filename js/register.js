const form = document.querySelector("form");
let regexPasswordValid = /^(([A-Z])+\w+([0-9])+)+\w+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-z._.-]+\.[a-z]+$/;

let usuariosRegistrados = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  let error = false;
  let messageError = "";
  const email = document.querySelector("#email");
  const username = document.querySelector("#username");
  const surname = document.querySelector("#surname");
  const password = document.querySelector("#password");
  const repeatPassword = document.querySelector("#repeatPassword");

  if (!regexEmail.test(document.querySelector("#email").value)) {
    error = true;
    messageError += "<p> El email tiene que tener un formato valido </p>";
  }

  if (email.value == "") {
    error = true;
    messageError += "<p> El campo email es obligatorio </p>";
  }

  if (username.value.length == 0) {
    error = true;
    messageError += "<p>El campo nombre es obligatorio</p>";
  }

  if (surname.value.length == 0) {
    error = true;
    messageError += "<p>El campo apellido es obligatorio</p>";
  }

  if (password.value.length < 7) {
    error = true;
    messageError += "<p> La contraseña debe tener al menos 7 caracteres </p>";
  }

  if (!regexPasswordValid.test(document.querySelector("#password").value)) {
    error = true;
    messageError +=
      "<p>La contraseña debe empezar por mayuscula y tener al menos un numero</p>";
  }

  if (password.value != repeatPassword.value) {
    error = true;
    messageError += "<p> La contraseñas deben ser identicas </p>";
  }

  if (error) {
    document.querySelector("#message").innerHTML = messageError;
    document.querySelector("#message").style.display = "inline-block";
  } else {
    registrarNuevaCuenta();
    form.submit();
  }
}

function registrarNuevaCuenta() {
  const user = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  usuariosRegistrados.push(user);
  console.log(usuariosRegistrados);
  usuariosEnLocalStorage();
}

function usuariosEnLocalStorage() {
  localStorage.setItem("Usuarios", "Sus cuentas");
  localStorage.setItem("Usuarios", JSON.stringify(usuariosRegistrados));
}
