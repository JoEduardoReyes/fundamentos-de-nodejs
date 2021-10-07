function hola(nombre, miCallback) {
  console.log("Hola, soy una funcion asincrona");
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback();
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando Proceso");

// hola("Eduardo", function () {
//   adios("Eduardo", function () {
//     console.log("Finalizando Proceso");
//   });
// });

hola("Eduardo", function () {});
adios("Eduardo", function () {});
