var btnEliminarCarrito = document.getElementsByClassName("eliminar-producto");
var tituloCarrito = document.getElementById("titulo");
var montoTotal = document.getElementById('total');
const finalizarCompra = document.getElementById("finalizarCompra");
const popUpFinalizarCompra = document.getElementById("popUpFinalizarCompra");
const filtrarBoton = document.getElementById("filtrarBtn");
const productos = [];

finalizarCompra.addEventListener("click", ()=> {
  popUpFinalizarCompra.classList.add("mostrarPopup");
  setTimeout(() => {
    popUpFinalizarCompra.classList.remove("mostrarPopup");
    localStorage.setItem("productos", productos);
    location.reload();
  }, 3500);
  montoTotal.innerHTML = `Monto total: $0.00`;
})

function eliminarProducto() {
  for (let i = 0; i < btnEliminarCarrito.length; i++) {
    if (btnEliminarCarrito[i]) {
      let boton = btnEliminarCarrito[i];

      boton.addEventListener("click", (e) => {
        e.preventDefault();

        let productos = JSON.parse(localStorage.getItem("productos"));
        for (let i = 0; i < productos.length; i++) {
          if (productos[i]) {
            if (boton.id == productos[i].id) {
              localStorage.setItem("productos", JSON.stringify(removeObjectWithId(productos, productos[i].id)));
              break;
            }
          }
        }

        if (e.target.classList.contains("eliminar-producto")) {
          e.target.parentElement.remove();
        }
        location.reload();
      });
    }
  }
}

function obtenerProductos() {
  
  let productos = JSON.parse(localStorage.getItem("productos"));
  var precio = 0;
  
  if(productos){
    if(productos.length >= 1){
      tituloCarrito.style.display = "none";
    }else{
      tituloCarrito.style.display = "inline-block";
    }
  }

  for (let i = 0; i < productos.length; i++) {
    const containerCarrito = document.getElementById("container-cart");
    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
              <h3>${productos[i].nombre}</h3>
              <h4>${productos[i].precio}</h4>
              <img src="${productos[i].imagen}">
              <button class="eliminar-producto" id="${productos[i].id}" onfocus="eliminarProducto()">Eliminar</button>
          `;
    containerCarrito.appendChild(div);
  }

  for (let i = 0; i < productos.length; i++) {
    if(productos[i]){ 
      numero = productos[i].precio.slice(3)
      precio += parseInt(numero);
    } 
  }

  if(precio == 0){
    montoTotal.innerHTML = `Monto total: $0.00`
  }else{
    montoTotal.innerHTML = `Monto total: US$${precio}`
  }
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
}
function limpiarProductosLocalStorage(){
  console.log("hola");
}