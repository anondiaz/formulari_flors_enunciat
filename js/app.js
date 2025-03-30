// Datos de trabajo

// Convertimos a formato array desde el string del localStorage y si no haya nada cargamos el contenido del array
const flores = JSON.parse(localStorage.getItem("flores"))  || [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

// Esta función ordena las flores por orden alfabetico
flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Hay que mostrar en el HTML los datos de las flores como lista ordenada
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Debe aparecer el resultado en #ejercicio1

//---------- Mio ----------

// for ( i = 0 ; i < flores.length ; i++) {
//   if (flores[i].stock) {
//     flores[i].stock = "tenemos"
//   } else {
//     flores[i].stock = "no tenemos"
//   }
//   // console.log(`Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock} stock`);
//   document.getElementById("ejercicio1").innerHTML += '<p>'+`Flor: ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${flores[i].stock} stock`+'</p>'
// }

//---------- Profe ----------

// Creamos una función para poder ejecutar la actualización del listado para los otros ejercicios

// console.log(flores);

function mostrarArray (id) {

  // Añadimos la función de ordenación para volver a ordenar los elementos después del ejercicio 5
  flores.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
  });

  const idHTML = document.getElementById(id)
  let htmlEj1 = "<ol>"

flores.forEach((flor) => {
  
  // console.log(flor["nombre"]);

  let textStock = "no"
  if (flor.stock) {
    textStock = ""
  }

  htmlEj1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion}, ${textStock} tenemos stock y cuesta ${flor.precio} €</li>`
  

})
htmlEj1 += '</ol>'
idHTML.innerHTML = htmlEj1

}

// Llamamos a la función para que se ejecute el ejercicio1
mostrarArray('ejercicio1')



// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Debe aparecer el resultado en #ejercicio2

//---------- Mio ----------

// const ejercicio2 = document.getElementById("ejercicio2")

// let htmlEj2 = "<ul>"

// flores.forEach((flor) => {
  
//   // console.log(flor["nombre"]);

//   let textStock = "no"
//   if (flor.stock) {
//     textStock = ""
//   }

//   if (flor.color == "blanco" && flor.floracion == "verano") {

//   htmlEj2 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock </li>`
//   }
  

// })
// htmlEj2 += '</ul>'

// ejercicio2.innerHTML = htmlEj2

//---------- Profe ----------

const ejercicio2 = document.getElementById("ejercicio2");

let htmlEj2 = "<ol>";

flores.forEach((flor) => {
  let textStock = "no";
  if (flor.stock) {
    textStock = "";
  }

  if (flor.color == "blanco" && flor.floracion == "verano")
    htmlEj2 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock</li>`;

});

htmlEj2 += "</ol>";

ejercicio2.innerHTML = htmlEj2;

// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Debe aparecer el resultado en #ejercicio3

//---------- Mio ----------

// const ejercicio3 = document.getElementById("ejercicio3")

// const formEj3 = document.forms["formEj3"];

// formEj3.addEvenListener('change', () => {
//   ejercicio3.innerHTML = ""
//   const color = formEj3["color"].value
//   const floracion = formEj3["floracion"].value
//   const stock = formEj3["stock"].value
  
//   let noHayResultados = true
//   let htmlEj3 = "<ol>"  
//   flores.forEach((flor) => {
//     let textStock = "no"
//     if (flor.stock) {
//       textStock =""
//     }
//     if ((color == "cualquiera" || flor.color == color) && (floracion == "cualquiera" || flor.floracion == floracion ) && (stock == "cualquiera" || String(flor.stock) == stock )) {
//       htmlEj3 += '<li>Flor: ${flor.nombre}</li>'
//     }

//   })

// }

// colorSel.addEventListener("change", () => {
//   const color = colorSel.value;
//   console.log(color);
// });

// htmlEj3 += '</ul>'

// ejercicio3.innerHTML = htmlEj3

//---------- Profe ----------

const ejercicio3 = document.getElementById("ejercicio3");
mostrarArray('ejercicio3')

const formEj3 = document.forms["formEj3"];

formEj3.addEventListener("change", () => {
  ejercicio3.innerHTML = "";

  const color = formEj3["color"].value;
  const floracion = formEj3["floracion"].value;
  const stock = formEj3["stock"].value;

  let noHayResultados = true
  let htmlEj3 = "<ol>";
  flores.forEach((flor) => {
    let textStock = "no";
    if (flor.stock) {
      textStock = "";
    }

    if (false || flor.color == color)  {
      console.log(color);
    }

    if (
      (color == "cualquiera" || flor.color == color) &&
      (floracion == "cualquiera" || flor.floracion == floracion) &&
      (stock == "cualquiera" || String(flor.stock) == stock)
    ) {
      htmlEj3 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock</li>`;
      noHayResultados = false
    }
  });

  htmlEj3 += "</ol>";
  ejercicio3.innerHTML += htmlEj3;

  if (noHayResultados) {
    ejercicio3.innerHTML = "No hay flor que cumpla las condiciones"
  }
});

// ==============================================================================
// EJERCICIO 4

// Haz un formulario para obtener una flor por cualquier característica: 
// nombre, floración o color.
// Debe aparecer el resultado en #ejercicio4

//---------- Mio ----------

// const ejercicio4 = document.getElementById("ejercicio4")

// let htmlFormEj4 = '<form action="#ejercicio4" id="myFormEj4" name="myFormEj4">'
// htmlFormEj4 += '<fieldset>'
// htmlFormEj4 += '<legend>Escribe una característica</legend>'
// htmlFormEj4 += '<label for="caracteristica">Caracteristica : </label>'
// htmlFormEj4 += '<input type="text" name="caracteristica" id="caracteristica" placeholder="Escribe una característica, por ejem: verano" minlength="4" maxlength="10"/>'
// htmlFormEj4 += '<input type="submit" value="Buscar flores" />'
// htmlFormEj4 += '</fieldset>'
// htmlFormEj4 += '</form>'
// ejercicio4.innerHTML += htmlFormEj4

// const formEj4 = document.forms["htmlFormEj4"];

// formEj4.addEventListener('submit', (e) => {
//   ejercicio4.textContent = ""
//   e.preventDefault();
//   let caracteristicaEscrita = formEj4['caracteristica'].value.trim()
//   // console.log(caracteristicaEscrita)
//   if (caracteristicaEscrita.length < 4) {
//       ejercicio4.textContent = "La característica debe tener 4 caracteres como mínimo"
//       return
//   }
//   caracteristicaEscrita = caracteristicaEscrita.toLocaleLowerCase()

//   flores.forEach((flor) => {
  
//     // console.log(flor["nombre"]);
  
//     let textStock = "no"
//     if (flor.stock) {
//       textStock = ""
//     }
  
//     htmlEj1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock </li>`
    
  
//   })
//   htmlEj1 += '</ol>'
//   idHTML.innerHTML = htmlEj1
  
//   }
//   console.log(caracteristicaEscrita);
// })
// let htmlEj4 = "<ol>"

// const textoEscrito = "rosa"

// flores.forEach((flor) => {

//   console.log(flor["color"]);

// })


//---------- Profe ----------

const ejercicio4 = document.querySelector('#ejercicio4')

const formEj4 = document.forms['formEj4']

formEj4.addEventListener('submit', (e) => {
  ejercicio4.textContent = ""

e.preventDefault()

let peticion = formEj4['buscador'].value.trim()
if (peticion.length == 0) {
  ejercicio4.textContent = "Hay que incluir texto en la búsqueda"
  return
}
peticion = peticion.toLocaleLowerCase()

let noHayResultados = true
let htmlEj1 = "<ol>";

flores.forEach((flor) => {
  // console.log(flor["nombre"]);

  if (flor.nombre == peticion || flor.color == peticion || flor.floracion == peticion) {
    let textStock = "no";
    if (flor.stock) {
      textStock = "";
    }  
    htmlEj1 += `<li>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textStock} tenemos stock</li>`;
    noHayResultados = false
  }
 
});

htmlEj1 += "</ol>";
ejercicio4.innerHTML = noHayResultados ? "No hay flor que cumpla las condiciones" : htmlEj1;

})

// ==============================================================================
// EJERCICIO 5

// Haz un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1
// Consigue persistencia con LocalStorage

//---------- Mio ----------

// const ejercicio5 = document.getElementById("ejercicio5")
// const formEj5 = document.forms["myFormEj5"]
// const objetoFlor = {}

// formEj5.addEventListener("change", () => { 

//   console.log(ejercicio5.getElementById("nombre"));

// })


//---------- Profe ----------
const formEj5 = document.forms['formEj5']

formEj5.addEventListener('submit', (e) => {
  e.preventDefault()
  let nombre = formEj5['nombreEj5'].value
  let color = formEj5['colorEj5'].value
  let floracion = formEj5['floracionEj5'].value
  let stock = formEj5['stock'].value
  // console.log(nombre, color, floracion, stock);

  let objetoFlor = {nombre, color, floracion, stock}
  // console.log(objetoFlor);
  flores.push(objetoFlor)

  mostrarArray("ejercicio1")

  localStorage.setItem("flores", JSON.stringify(flores))
})

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

//---------- Mio ----------

// Generamos un array de flores y precios según la lista anterior
const preciosFlores  = [
  { nombreflor: "rosa rojo", precio: 8.00},
  { nombreflor: "rosa blanco", precio: 10.00},
  { nombreflor: "jazmín blanco", precio: 12.00},
  { nombreflor: "crisantemo blanco", precio: 5.00},
  { nombreflor: "cerezo blanco", precio: 25.00},
  { nombreflor: "cyclamen rojo", precio: 4.50}  
]

// Buscamos todas las flores del listado principal
flores.forEach((flor) => {
  // console.log(flor["nombre"]);
  // console.log(flor["color"]);
  // console.log(flor["floracion"]);
  // console.log(flor["stock"]);
  // Generamos la claveFlor para poder comparar flores y colores
  let claveFlor = flor["nombre"] + " " + flor["color"]
  // Asignamos un valor al nuevo campo precio de cada flor
  flor.precio = parseFloat(0.00).toFixed(2)  
  // Buscamos las coincidencias de las flores del listado principal con el array de precios para actualizar precios
  preciosFlores.forEach((nombreF) => {
    // console.log(claveFlor);
    // console.log(nombreF["nombreflor"]);
    if (claveFlor == nombreF["nombreflor"]) {
    // console.log(nombreF["nombreflor"]);
    flor.precio = parseFloat(nombreF["precio"]).toFixed(2)  
    // console.log(nombreF["nombreflor"], flor.precio);  
    }
  })
// console.log(claveFlor);
// console.log(flores);
})


//Ahora vamos a crear el funcionamiento del formulario para actualizar los precios
// Obtenemos el formulario
const formEj6 = document.forms['formEj6']
// Obtenemos el select y el input
const florSeleccionada = document.getElementById("floreslista")
let precio = document.getElementById("precio")
// console.log(precio);
// console.log(florSeleccionada);
let htmlEj6 = florSeleccionada.innerHTML
flores.forEach((flor) => {
  // console.log(flor["nombre"]);
  // console.log(flor["color"]);
  // console.log(flor["floracion"]);
   htmlEj6 += `<option value="${flor.nombre} ${flor.color}">Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y cuesta: ${flor.precio}</option>`
  //  console.log(htmlEj6);
})
florSeleccionada.innerHTML = htmlEj6

formEj6.addEventListener('change', () => {
  let florSelList = florSeleccionada.value
  console.log(florSelList)
  document.getElementById("precio") = florSelList
  console.log(precio);
})

formEj6.addEventListener('submit', () => {
  
  florSeleccionada.value
})

mostrarArray("ejercicio1")


//---------- Profe ----------

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

//---------- Mio ----------

//---------- Profe ----------

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1

//---------- Mio ----------

//---------- Profe ----------
