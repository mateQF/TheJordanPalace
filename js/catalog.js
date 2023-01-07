"use strict";

const volverArriba = document.querySelector("#volverArriba");
$(document).ready(function () {
  $(volverArriba).hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(volverArriba).fadeIn();
    } else {
      $(volverArriba).fadeOut();
    }
  });
  $(volverArriba).click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

const filterBtn = document.getElementById("filterBtn");
const filtrarBtn = document.getElementById("filtrarBtn");
const filtersContainer = document.getElementById("filtersContainer");
const articleContainer = document.getElementById("catalogContent");
const btnAgregarCarrito = document.getElementsByClassName("agregarCarrito");
const productos = [];
// EVENTOS
filterBtn.addEventListener("click", () => {
  filtersContainer.classList.toggle("filters-close");
  filtersContainer.classList.toggle("filters__container--close");
  filtersContainer.classList.toggle("filters__container--open");
});

const productosJson = [
  {
    nombre: "airJordanRetroVIII-1",
    imagen: "./../images/airJordanRetroVIIIPNG/1.png",
    modelo: "airJordanRetroVIII",
    precio: 325,
    id: "pa1",
  },
  {
    nombre: "airJordanRetroVIII-2",
    imagen: "./../images/airJordanRetroVIIIPNG/2.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa2",
  },
  {
    nombre: "airJordanRetroVIII-3",
    imagen: "./../images/airJordanRetroVIIIPNG/3.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa3",
  },
  {
    nombre: "airJordanRetroVIII-4",
    imagen: "./../images/airJordanRetroVIIIPNG/4.png",
    modelo: "airJordanRetroVIII",
    precio: 165,
    id: "pa4",
  },
  {
    nombre: "airJordanRetroVIII-5",
    imagen: "./../images/airJordanRetroVIIIPNG/5.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa5",
  },
  {
    nombre: "airJordanRetroVIII-6",
    imagen: "./../images/airJordanRetroVIIIPNG/6.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa6",
  },
  {
    nombre: "airJordanRetroVIII-7",
    imagen: "./../images/airJordanRetroVIIIPNG/7.png",
    modelo: "airJordanRetroVIII",
    precio: 215,
    id: "pa7",
  },
  {
    nombre: "airJordanRetroVIII-8",
    imagen: "./../images/airJordanRetroVIIIPNG/8.png",
    modelo: "airJordanRetroVIII",
    precio: 225,
    id: "pa8",
  },
  {
    nombre: "airJordanRetroVIII-9",
    imagen: "./../images/airJordanRetroVIIIPNG/9.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa9",
  },
  {
    nombre: "airJordanRetroVIII-10",
    imagen: "./../images/airJordanRetroVIIIPNG/10.png",
    modelo: "airJordanRetroVIII",
    precio: 225,
    id: "pa10",
  },
  {
    nombre: "airJordanRetroVIII-11",
    imagen: "./../images/airJordanRetroVIIIPNG/11.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa11",
  },
  {
    nombre: "airJordanRetroVIII-12",
    imagen: "./../images/airJordanRetroVIIIPNG/12.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa12",
  },
  {
    nombre: "airJordanRetroVIII-13",
    imagen: "./../images/airJordanRetroVIIIPNG/13.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa13",
  },
  {
    nombre: "airJordanRetroVIII-14",
    imagen: "./../images/airJordanRetroVIIIPNG/14.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa14",
  },
  {
    nombre: "airJordanRetroVIII-15",
    imagen: "./../images/airJordanRetroVIIIPNG/15.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa15",
  },
  {
    nombre: "airJordanRetroVIII-16",
    imagen: "./../images/airJordanRetroVIIIPNG/16.png",
    modelo: "airJordanRetroVIII",
    precio: 125,
    id: "pa16",
  },
  {
    nombre: "airJordanRetroVIII-17",
    imagen: "./../images/airJordanRetroVIIIPNG/17.png",
    modelo: "airJordanRetroVIII",
    precio: 175,
    id: "pa17",
  },
  {
    nombre: "airJordanVII-1",
    imagen: "./../images/airJordanVII/1.png",
    modelo: "airJordanVII",
    precio: 175,
    id: "pb1",
  },
  {
    nombre: "airJordanVII-2",
    imagen: "./../images/airJordanVII/2.png",
    modelo: "airJordanVII",
    precio: 225,
    id: "pb2",
  },
  {
    nombre: "airJordanVII-3",
    imagen: "./../images/airJordanVII/3.png",
    modelo: "airJordanVII",
    precio: 145,
    id: "pb3",
  },
  {
    nombre: "airJordanVII-4",
    imagen: "./../images/airJordanVII/4.png",
    modelo: "airJordanVII",
    precio: 145,
    id: "pb4",
  },
  {
    nombre: "airJordanVII-5",
    imagen: "./../images/airJordanVII/5.png",
    modelo: "airJordanVII",
    precio: 225,
    id: "pb5",
  },
  {
    nombre: "airJordanVII-6",
    imagen: "./../images/airJordanVII/6.png",
    modelo: "airJordanVII",
    precio: 155,
    id: "pb6",
  },
  {
    nombre: "airJordanVII-7",
    imagen: "./../images/airJordanVII/7.png",
    modelo: "airJordanVII",
    precio: 155,
    id: "pb7",
  },
  {
    nombre: "airJordanVII-8",
    imagen: "./../images/airJordanVII/8.png",
    modelo: "airJordanVII",
    precio: 185,
    id: "pb8",
  },
  {
    nombre: "airJordanVII-9",
    imagen: "./../images/airJordanVII/9.png",
    modelo: "airJordanVII",
    precio: 195,
    id: "pb9",
  },
  {
    nombre: "airJordanVII-10",
    imagen: "./../images/airJordanVII/10.png",
    modelo: "airJordanVII",
    precio: 150,
    id: "pb10",
  },
  {
    nombre: "airJordanXXXIV-1",
    imagen: "./../images/airJordanXXXIV/1.png",
    modelo: "airJordanXXXIV",
    precio: 225,
    id: "pc1",
  },
  {
    nombre: "airJordanXXXIV-2",
    imagen: "./../images/airJordanXXXIV/2.png",
    modelo: "airJordanXXXIV",
    precio: 225,
    id: "pc2",
  },
  {
    nombre: "airJordanXXXIV-3",
    imagen: "./../images/airJordanXXXIV/3.png",
    modelo: "airJordanXXXIV",
    precio: 195,
    id: "pc3",
  },
  {
    nombre: "airJordanXXXIV-4",
    imagen: "./../images/airJordanXXXIV/4.png",
    modelo: "airJordanXXXIV",
    precio: 225,
    id: "pc4",
  },
  {
    nombre: "airJordanXXXIV-5",
    imagen: "./../images/airJordanXXXIV/5.png",
    modelo: "airJordanXXXIV",
    precio: 195,
    id: "pc5",
  },
  {
    nombre: "airJordanXXXIV-6",
    imagen: "./../images/airJordanXXXIV/6.png",
    modelo: "airJordanXXXIV",
    precio: 225,
    id: "pc6",
  },
  {
    nombre: "airJordanXXXIV-7",
    imagen: "./../images/airJordanXXXIV/7.png",
    modelo: "airJordanXXXIV",
    precio: 225,
    id: "pc7",
  },
  {
    nombre: "airJordanXXXIV-8",
    imagen: "./../images/airJordanXXXIV/8.png",
    modelo: "airJordanXXXIV",
    precio: 195,
    id: "pc8",
  },
];

showArray(productosJson);
filtrarBtn.addEventListener("click", () => {
  const productosFiltrados = filtrarProductos(productosJson);
  limpiarCatalogo();
  showArray(productosFiltrados);
});
filtrarBtn.addEventListener("click", () => {
  console.log("filtrarBoton");
  for (let i = 0; i < btnAgregarCarrito.length; i++) {
    if (btnAgregarCarrito[i]) {
      btnAgregarCarrito[i].addEventListener("click", (e) => {
        console.log(btnAgregarCarrito);
        e.preventDefault();
        console.log(e);
        leerDatos(e);
      });
    }
  }
  console.log("ok");
});

console.log(btnAgregarCarrito);
for (let i = 0; i < btnAgregarCarrito.length; i++) {
  if (btnAgregarCarrito[i]) {
    btnAgregarCarrito[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e);
      leerDatos(e);
    });
  }
}

// FUNCIONES
function showArray(lista) {
  const arr = validarArrVacio(lista);

  arr.forEach((producto) => {
    if (producto == null) {
      return;
    }
    articleContainer.innerHTML += showArticle(
      producto.nombre,
      producto.precio,
      producto.modelo,
      producto.imagen,
      producto.id
    );
  });
}

function showArticle(nombre, precio, modelo, imgUrl) {
  const id = "agregarCarrito";
  return `
    <article class="card-container">
    <div class="card__catalog card--colorRed">
    <div class="imgBx">
                    <img
                    class="imagen_carrito"
                    src="${imgUrl}"/>
                </div>
                <div class="contentBx">
                    <h2 class="nombreProducto">
                    ${nombre}
                    </h2>
                </div>
                <div class="card__purchase">
                    <p class="card__price">US$${precio}</p>
                    <button  class="agregarCarrito" id="${id}">Comprar</button>
                    </div>
                    </div>
                    </article>`;
}

function limpiarCatalogo() {
  articleContainer.innerHTML = "";
}

function filtrarProductos(listaProductos) {
  let arrayFiltrado = [];
  let modelosFiltrados = filtrarModelos();
  let preciosFiltrados = filtrarPrecio(modelosFiltrados);
  arrayFiltrado = arrayFiltrado.concat(preciosFiltrados);
  const eliminaProductosDuplicados = (arr) => {
    const arrayFiltradoSinDuplicados = arr.map((producto) => {
      return [producto.id, producto];
    });

    return [...new Map(arrayFiltradoSinDuplicados).values()];
  };

  return eliminaProductosDuplicados(arrayFiltrado);
}

function filtrarModelos() {
  const modelo1 = document.getElementById("modelo1");
  const modelo2 = document.getElementById("modelo2");
  const modelo3 = document.getElementById("modelo3");
  let arrayModelosFiltrado = [];

  if (modelo1.checked) {
    const modelos1 = productosJson.filter(
      (producto) => producto.modelo == "airJordanRetroVIII"
    );
    arrayModelosFiltrado = arrayModelosFiltrado.concat(modelos1);
  }
  if (modelo2.checked) {
    const modelos2 = productosJson.filter(
      (producto) => producto.modelo === "airJordanVII"
    );
    arrayModelosFiltrado = arrayModelosFiltrado.concat(modelos2);
  }
  if (modelo3.checked) {
    const modelos3 = productosJson.filter(
      (producto) => producto.modelo === "airJordanXXXIV"
    );
    arrayModelosFiltrado = arrayModelosFiltrado.concat(modelos3);
  }

  return arrayModelosFiltrado;
}

function filtrarPrecio(lista) {
  const precioMenor = document.getElementById("precioMenor");
  const precioIntermedio = document.getElementById("precioIntermedio");
  const precioMayor = document.getElementById("precioMayor");
  const arr = validarArrVacio(lista);
  let arrayFiltrado = [];
  if (precioMenor.checked) {
    const modelosLowCost = arr.filter((producto) => producto.precio < 150);
    arrayFiltrado = arrayFiltrado.concat(modelosLowCost);
  }
  if (precioIntermedio.checked) {
    const modelosMidCost = arr.filter(
      (producto) => producto.precio >= 150 && producto.precio < 200
    );
    arrayFiltrado = arrayFiltrado.concat(modelosMidCost);
  }
  if (precioMayor.checked) {
    const modelosHighCost = arr.filter((producto) => producto.precio >= 200);
    arrayFiltrado = arrayFiltrado.concat(modelosHighCost);
  }

  if (
    !precioMenor.checked &&
    !precioIntermedio.checked &&
    !precioMayor.checked
  ) {
    arrayFiltrado = arrayFiltrado.concat(arr);
  }

  return arrayFiltrado;
}

function validarArrVacio(arr) {
  if (arr[0] !== undefined) {
    return arr;
  } else {
    return productosJson;
  }
}

function leerDatos(e) {
  console.log("ok?");
  e.preventDefault();
  if (e.target.classList.contains("agregarCarrito")) {
    const producto = e.target.parentElement.parentElement.parentElement;
    const nombre = producto.querySelector(".nombreProducto").textContent;
    const precio = producto.querySelector(".card__price").textContent;
    const imagen = producto.querySelector(".imagen_carrito").src;
    const id = producto.querySelector(".agregarCarrito").id;

    let productoAgregar = {
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      id: id,
    };

    //agregar al local storage
    productos.push(productoAgregar);
    localStorage.setItem("productos", JSON.stringify(productos));

    //alerta de que se agrego el producto
    const Toast = Swal.mixin({
      background: "#73777B",
      color: "white",
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
    });

    Toast.fire({
      icon: "success",
      title: "Producto agregado correctamente",
    });
  }
}
