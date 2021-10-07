const nombre = "Eduardo";

function hola(nombre, miCallback) {
  console.log("Hola, soy una funcion asincrona");
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback();
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log(`blablable`);
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

// hola(nombre, function () {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, function () {
//           console.log("Finalizando Proceso");
//         });
//       });
//     });
//   });
// });

function conversarion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversarion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando Proceso");
hola(nombre, () => {
  conversarion(nombre, 3, () => {
    console.log("Proceso terminado");
  });
});
