"use strict";

const agregarTarjeta = document.getElementById("agregarTarjeta");
const popupTarjeta = document.getElementById("popupTarjeta");
const closeBtnTarjeta = document.getElementById("closeBtnTarjeta");
const popupDireccion = document.getElementById("popupDireccion");
const agregarDireccion = document.getElementById("agregarDireccion");
const closeBtnDireccion = document.getElementById("closeBtnDireccion");

const divTarjetas = document.querySelector(".tarjetasContainer");
const divDirecciones = document.querySelector(".direccionesContainer");

// campos de formulario
const formTarjeta = document.querySelector("#form-tarjeta");
const numeroTarjeta = document.querySelector("#serial");
const codigoSeguridad = document.querySelector("#cod-seguridad");
const vencimiento = document.querySelector("#vencimiento");
const titular = document.querySelector("#titular");

// botones de agregar
const btnAgregarDireccion = document.querySelector("#agregarDireccionPopUp");
const btnGuardarTarjeta = document.querySelector("#guardarTarjeta");

// botones de eliminar
const botonesEliminar = document.getElementsByClassName("eliminar");

// arrays
const tarjetaData = [];
const direccionData = [];

agregarTarjeta.addEventListener("click", () => {
  popupTarjeta.classList.add("popupTarjetasActivo");
});

closeBtnTarjeta.addEventListener("click", () => {
  popupTarjeta.classList.remove("popupTarjetasActivo");
});

agregarDireccion.addEventListener("click", () => {
  popupDireccion.classList.add("popUpDireccionActivo");
});

closeBtnDireccion.addEventListener("click", () => {
  popupDireccion.classList.remove("popUpDireccionActivo");
});

function eliminar() {
  for (let i = 0; i < botonesEliminar.length; i++) {
    if (botonesEliminar[i]) {
      botonesEliminar[i].addEventListener("click", (e) => {
        let target = e.target;
        target.parentElement.remove();
      });
    }
  }
}

formTarjeta.addEventListener("submit", (e) => {
  e.preventDefault();
  validarTarjeta();
});

function validarTarjeta() {
  let error = false;
  let mensajesError = "";
  let regexTarjeta = /^[0-9]{10}$/;
  let regexVenc = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  let regexCodigoSeguridad = /^[0-9]{3}$/;
  let regexTitular = /^[A-Z][a-zA-Z]+$/;

  var aux = 0;

  const arraySerial = Array.from(String(numeroTarjeta.value), Number);

  if (numeroTarjeta.value == 0) {
    error = true;
    mensajesError += "<p>El campo de tarjeta es invalido</p>";
  }

  if (esPar(arraySerial[9]) == true) {
    for (let i = 0; i < arraySerial.length - 1; i++) {
      aux += arraySerial[i];
    }
    if (esPar(aux) == true) {
      error = true;
      mensajesError += "<p>El formato de la tarjeta es invalido</p>";
    }
  }
  if (esPar(arraySerial[9]) == false) {
    for (let i = 0; i < arraySerial.length - 1; i++) {
      aux += arraySerial[i];
    }
    if (esPar(aux) == false) {
      error = true;
      mensajesError += "<p>El formato de la tarjeta es invalido</p>";
    }
  }

  function esPar(numero) {
    return numero % 2 == 0;
  }

  if (!regexVenc.test(vencimiento.value)) {
    error = true;
    mensajesError += "<p>El campo de vencimiento es invalido</p>";
  }
  if (!regexCodigoSeguridad.test(codigoSeguridad.value)) {
    error = true;
    mensajesError += "<p>El formato del código de seguridad es invalido</p>";
  }

  if (!regexTarjeta.test(numeroTarjeta.value)) {
    error = true;
    mensajesError += "<p>El campo de tarjeta es invalido</p>";
  }

  if (!regexTitular.test(titular.value)) {
    error = true;
    mensajesError += "<p>El formato del titular es invalido</p>";
  }

  if (titular.value == "") {
    error = true;
    mensajesError += "<p>El campo titular es obligatorio</p>";
  }

  if (error) {
    document.getElementById("mensaje2").innerHTML = mensajesError;
  } else {
    let nuevaTarjetaData = {
      numeroTarjeta: numeroTarjeta.value,
      codigoSeguridad: codigoSeguridad.value,
      vencimiento: vencimiento.value,
      titular: titular.value,
      direcciones: direcciones.value,
    };
    tarjetaData.push(nuevaTarjetaData);
    localStorage.setItem("listaTarjetas", JSON.stringify(tarjetaData));
    // formTarjeta.submit();
    agregarNuevaTarjeta();
    setTimeout(() => {
      popupTarjeta.classList.remove("popupTarjetasActivo");
    }, 1000);
  }
}

function agregarNuevaTarjeta() {
  let tarjetasObtenidas = JSON.parse(localStorage.getItem("listaTarjetas"));
  for (let i = 0; i < tarjetasObtenidas.length; i++) {
    if (tarjetasObtenidas[i]) {
      let nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.classList.add("tarjeta");
      nuevaTarjeta.innerHTML = `<p class="datos">Titular: ${tarjetasObtenidas[i].titular} Numero: ${tarjetasObtenidas[i].numeroTarjeta}</p>
            <button class="eliminar" onfocus="eliminar()">Eliminar</button>`;
      divTarjetas.appendChild(nuevaTarjeta);
    }
  }
}

const formDireccion = document.getElementById("formularioDireccion");
const alias = document.getElementById("alias");
const provincias = document.getElementById("provincias");
const localidad = document.getElementById("localidades");
const direccion = document.getElementById("direccion");
const tel = document.getElementById("tel");
const dept = document.getElementById("dept");
const piso = document.getElementById("piso");

formDireccion.addEventListener("submit", (e) => {
  e.preventDefault();
  validarDireccion();
});

function validarDireccion() {
  let error = false;
  let mensajesError = "";
  let regexNumeroTelefono = /^(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  let regexPiso = /^[0-9]+$/;
  let regexDept = /^[A-Za-z]{1}/;

  if (alias.value == "") {
    error = true;
    mensajesError += "<p>El campo alias es obligatorio</p>";
  }
  if (provincias.value == 0) {
    error = true;
    mensajesError += "<p>El campo provincia es obligatorio</p>";
  }
  if (localidad.value == "") {
    error = true;
    mensajesError += "<p>El campo localidad es obligatorio</p>";
  }
  if (tel.value == "") {
    error = true;
    mensajesError += "<p>El campo teléfono es obligatorio</p>";
  }
  if (!regexNumeroTelefono.test(tel.value)) {
    error = true;
    mensajesError += "<p>El formato del teléfono es invalido</p>";
  }
  if (dept.value == "") {
    error = true;
    mensajesError += "<p>El campo dept es obligatorio</p>";
  }
  if (!regexDept.test(dept.value)) {
    error = true;
    mensajesError += "<p>El formato del departamento es invalido</p>";
  }
  if (piso.value == "") {
    error = true;
    mensajesError += "<p>El campo piso es obligatorio</p>";
  }
  if (!regexPiso.test(piso.value)) {
    error = true;
    mensajesError += "<p>El formato del piso es invalido</p>";
  }
  if (error) {
    document.getElementById("mensajeDireccion").innerHTML = mensajesError;
  } else {
    let nuevaDireccionData = {
      alias: alias.value,
      provincias: provincias.value,
      localidad: localidad.value,
      direccion: direccion.value,
      tel: tel.value,
      dept: dept.value,
      piso: piso.value,
    };
    direccionData.push(nuevaDireccionData);
    localStorage.setItem("listaDirecciones", JSON.stringify(direccionData));
    agregarNuevaDireccion();
    setTimeout(() => {
      popupDireccion.classList.remove("popUpDireccionActivo");
    }, 1000);
  }
}

function agregarNuevaDireccion() {
  let direccionesObtenidas = JSON.parse(
    localStorage.getItem("listaDirecciones")
  );
  for (let i = 0; i < direccionesObtenidas.length; i++) {
    if (direccionesObtenidas[i]) {
      let nuevaDireccion = document.createElement("div");
      nuevaDireccion.classList.add("direccion");
      nuevaDireccion.innerHTML = `<p class="datos">Direccion: ${direccionesObtenidas[i].direccion} Alias: ${direccionesObtenidas[i].alias}</p>
                <button class="eliminar" onfocus="eliminar()">Eliminar</button>`;
      divDirecciones.appendChild(nuevaDireccion);
    }
  }
}
