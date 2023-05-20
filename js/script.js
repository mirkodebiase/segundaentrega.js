// Aplico descuentos
const descuento = (x) => x * 0.1;
const recargo = (x) => x * 0.15;
// Marco productos
let productos = [
  {
    idProducto: 1,
    nombre: "Remera Oversize",
    presentacion: "Marca Nike",
    precio: 3000,
    categoria: "Remeras",
  },
  {
    idProducto: 2,
    nombre: "Remera Big Swoosh",
    presentacion: "Marca Nike",
    precio: 5000,
    categoria: "Remeras",
  },
  {
    idProducto: 3,
    nombre: "Pantalon Cargo Negro Gamuza",
    presentacion: "Marca Guess",
    precio: 7000,
    categoria: "Pantalones",
  },
  {
    idProducto: 4,
    nombre: "Pantalon negro tela de Pana",
    presentacion: "Thommy",
    precio: 12000,
    categoria: "Pantalones",
  },
  {
    idProducto: 5,
    nombre: "Tenis UltraMoon NBA",
    presentacion: "Adidas",
    precio: 1280,
    categoria: "Zapatillas",
  },
  {
    idProducto: 6,
    nombre: "Tenis Ultra NBA 2.0",
    presentacion: "Adidas",
    precio: 2663,
    categoria: "Zapatillas",
  },
];
let opcionCompra = "";
let productosFiltrados = [];
let carrito = [];
let salida = [];
let subtotal = 0;
let totalAPagar = 0;
// Bienvenida de la marca
alert("Bienvenido a Clothes Plugg");
let nombre = prompt("Ingresa tu nombre").trim().toUpperCase();
let edad = Number(
  prompt("Ingresa tu edad para entrar al SHOP con descuentos exclusivos")
);
// SHOP - Carrito
if (edad >= 14) {
  alert("Bienvenido " + nombre);
  alert(
    "A continuación podrá realizar la compra. \nRecuerda que comprando tres o más unidades se te realizará un descuento de 10%"
  );
  do {
    opcionCompra = prompt(
      "Ingrese la categoria a comprar: \n1-Remeras\n2-Pantalones\n3-Zapatillas\n0-Para finalizar compra"
    );
    switch (opcionCompra) {
      case "1":
        productosFiltrados = productos.filter((producto) =>
          producto.categoria.includes("Remeras")
        );
        productosFiltrados.forEach(
          (producto) =>
            (producto.venta = Number(
              prompt(
                "Ingrese la cantidad de " +
                  producto.nombre +
                  " " +
                  producto.presentacion +
                  "\nPrecio: $ " +
                  producto.precio
              )
            ))
        );
        carrito = carrito.concat(
          productosFiltrados.filter((producto) => producto.venta > 0)
        );

        break;
      case "2":
        productosFiltrados = productos.filter((producto) =>
          producto.categoria.includes("Pantalones")
        );
        productosFiltrados.forEach(
          (producto) =>
            (producto.venta = Number(
              prompt(
                "Ingrese la cantidad de " +
                  producto.nombre +
                  " " +
                  producto.presentacion +
                  "\nPrecio: $ " +
                  producto.precio
              )
            ))
        );
        carrito = carrito.concat(
          productosFiltrados.filter((producto) => producto.venta > 0)
        );
        break;
      case "3":
        productosFiltrados = productos.filter((producto) =>
          producto.categoria.includes("Zapatillas")
        );
        productosFiltrados.forEach(
          (producto) =>
            (producto.venta = Number(
              prompt(
                "Ingrese la cantidad de " +
                  producto.nombre +
                  " " +
                  producto.presentacion +
                  "\nPrecio: $ " +
                  producto.precio
              )
            ))
        );

        carrito = carrito.concat(
          productosFiltrados.filter((producto) => producto.venta > 0)
        );

        break;
      case "0":
        break;
      default:
        alert("Por favor ingrese alguna de las opciones válidas");
        break;
    }
  } while (opcionCompra != 0);
  let cantidadTotalComprada = carrito.reduce(
    (acumulador, producto) => acumulador + producto.venta,
    0
  );
  let productosYpresentacion = carrito.forEach((producto) => {
    salida =
      salida +
      producto.venta +
      " unidades de " +
      producto.nombre +
      " " +
      producto.presentacion +
      " de la categoria " +
      producto.categoria +
      "\n";
  });
  if (cantidadTotalComprada < 3 && cantidadTotalComprada > 0) {
    alert(salida);
    let sumatoria = carrito.forEach((producto) => {
      subtotal = subtotal + producto.venta * producto.precio;
    });
    totalAPagar = subtotal;
    alert(
      "Adquiriste " +
        carrito.reduce(
          (acumulador, producto) => acumulador + producto.venta,
          0
        ) +
        " unidades. \nNo posee descuento\nTotal a pagar: $ " +
        totalAPagar
    );
  }
  if (cantidadTotalComprada >= 3) {
    alert(salida);
    sumatoria = carrito.forEach((producto) => {
      subtotal = subtotal + producto.venta * producto.precio;
    });
    totalAPagar = subtotal + Number(descuento(subtotal).toFixed(2));
    alert(
      "Adquiriste " +
        carrito.reduce(
          (acumulador, producto) => acumulador + producto.venta,
          0
        ) +
        " unidades. \nHa sido beneficiado por un descuento de $ " +
        descuento(subtotal).toFixed(2) +
        "\nTotal a pagar: $ " +
        totalAPagar
    );

    cantidadCuotas = Number(
      prompt("Por favor ingrese la cantidad de cuotas en las que desea abonar")
    );
    if (cantidadCuotas === 1) {
      alert(
        "Usted abonará en un pago el total de: $" +
          totalAPagar +
          "\nNo se han sumado cargos por financiación"
      );
    } else {
      let totalAPagarFinanciado =
        totalAPagar + Number(recargo(totalAPagar).toFixed(2));
      alert(
        "Usted abonará en un cuotas el total de: $" +
          totalAPagarFinanciado +
          "\nSe han sumado cargos por financiacion por $ " +
          recargo(totalAPagar).toFixed(2)
      );
      for (let i = 0; i < cantidadCuotas; i++) {
        let salidaCuotas =
          "Pagará en " +
          cantidadCuotas +
          " cuotas de $" +
          (totalAPagarFinanciado / cantidadCuotas).toFixed(2) +
          "\n Cuota " +
          (i + 1) +
          " de $ " +
          (totalAPagarFinanciado / cantidadCuotas).toFixed(2);
        alert(salidaCuotas);
      }
    }
    alert(
      "Muchas gracias " +
        nombre +
        " por comprar en Clothes Plugg \nEsperamos que disfrute de nuestros productos"
    );
  } else {
    alert("Estamos a tu disposición, vuelva pronto :)");
  }
} else {
  alert(
    "Para ingresar con descuentos exclusivos tenes que ser mayor de 14 años"
  );
}
