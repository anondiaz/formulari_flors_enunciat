// Datos de trabajo

const flores = [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Hay que mostrar en el HTML los datos de las flores como lista ordenada
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Debe aparecer el resultado en #ejercicio1

// for ( i = 0 ; i < flores.length ; i++) {
//   if (flores[i].stock) {
//     flores[i].stock = "tenemos"
//   } else {
//     flores[i].stock = "no tenemos"
//   }
//   // console.log(`Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock} stock`);
//   document.getElementById("ejercicio1").innerHTML += '<p>'+`Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock} stock`+'</p>'
// }

const ejercicio1 = document.getElementById("ejercicio1")

let htmlEj1 = "<ol>"

flores.forEach((flor) => {
  
  // console.log(flor["nombre"]);

  let textStock = "no"
  if (flor.stock) {
    textStock = ""
  }

  htmlEj1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock </li>`
  

})
htmlEj1 += '</ol>'
ejercicio1.innerHTML = htmlEj1



// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Debe aparecer el resultado en #ejercicio2

const ejercicio2 = document.getElementById("ejercicio2")

let htmlEj2 = "<ul>"

flores.forEach((flor) => {
  
  // console.log(flor["nombre"]);

  let textStock = "no"
  if (flor.stock) {
    textStock = ""
  }

  if (flor.color == "blanco" && flor.floracion == "verano") {

  htmlEj2 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock </li>`
  }
  

})
htmlEj2 += '</ul>'

ejercicio2.innerHTML = htmlEj2



// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Debe aparecer el resultado en #ejercicio3

const formEj3 = document.forms["formEj3"];

const ejercicio3 = document.getElementById("ejercicio3")

// let htmlEj3 = "<ul>"

const colorSel = document.formEj3.querySelectorAll('input[name="color"]')
const floracionSel = document.formEj3.querySelectorAll('input[name="floracion"]')
const stockSel = document.formEj3.querySelectorAll('input[name="stock"]')

console.log(colorSel);
console.log(floracionSel);
console.log(stockSel);



// colorSel.addEventListener("change", () => {
//   const color = colorSel.value;
//   console.log(color);
// });



// htmlEj3 += '</ul>'

// ejercicio3.innerHTML = htmlEj3


// ==============================================================================
// EJERCICIO 4

// Haz un formulario para obtener una flor por cualquier característica: 
// nombre, floración o color.
// Debe aparecer el resultado en #ejercicio4


// ==============================================================================
// EJERCICIO 5

// Haz un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1
// Consigue persistencia con LocalStorage


// ============================================================================== 
/* E X T R A S */

// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1
