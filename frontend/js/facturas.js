//importar la funcion de alertas
import alertas from '../js/alertas.js';
//DOM EVENTO DE CLICK PARA MOSTRAR nav de facturas
// evento de click para deplegar el div que contiene los campos para rellenar y crear el nuevo servicio
// document.addEventListener('DOMContentLoaded', (event) => {
//   const agregarFactura = document.getElementById('agregar_factura');
// if (agregarFactura) {
//   agregarFactura.addEventListener('click', guardarFacturaCliente);
//   }
//     document.getElementById('formFactura').classList.remove('hide');
// });
  

// // evento de click para ver las facturas creadas
// document.addEventListener('DOMContentLoaded', function () {
// document.getElementById('ver_facturas').addEventListener('click', function () {
//   document.getElementById('contenedorFacturasCreadas').classList.remove('hide');
//   document.getElementById('formFactura').classList.add('hide');
//   obtenerTodasLasFacturas();
//   });
// });

// //evento de click para agregar nueva linea de la factura
// document.getElementById('agregarLinea').addEventListener('click', agregarNuevaLinea);

// // Función para agregar  campos de entrada al hacer click en agregar linea
// function agregarNuevaLinea() {
//      const nuevosCampos = document.getElementById('nuevosCampos');
//      const nuevaLinea = document.createElement('div');
//      nuevaLinea.classList.add('nuevaLinea');
//      nuevaLinea.innerHTML = `
//      <select id="servicioDropdown" placeholder="Seleccionar servicio...">
//      <!-- Las opciones se llenarán dinámicamente con JavaScript -->
//       </select>
//      <input type="text" id="descripcion" placeholder="Descripción">
//      <input type="text" id="cantidad" placeholder="Cantidad">
//      <input type="text" id="precio" placeholder="Precio">
//      <input type="text" id= "impuesto" placeholder="Precio sin IVA %" onchange="calcularImporteTotal(this)">
//      `;
//      nuevosCampos.appendChild(nuevaLinea);
//    }

// //llenar el dropdown de clientes
// // Funcion para obtener el cliente 
// const clienteDropdown = document.getElementById("clienteDropdown");

// // Haz una solicitud GET para obtener los clientes
// fetch("http://localhost:4000/api/v1/clientes/obtenerClientes")
//   .then((response) => response.json())
//   .then((clientes) => {
//     // Llena el desplegable con los clientes obtenidos
//     clientes.forEach((cliente) => {
//       const option = document.createElement("option");
//       option.value = cliente.id;
//       option.text = cliente.nombre;
//       clienteDropdown.add(option);
//     });
//   })
//   .catch((error) => alertas.mostrarAlertaError('error', 'Oops...', 'Error al obtener los clientes..👿..' + error));

// //llenar el dropdown de servicios
// const servicioDropdown = document.getElementById("servicioDropdown");
// fetch("http://localhost:4000/api/v1/servicios/obtenerServicio")
//   .then((response) => response.json())
//   .then((servicios) => {
//     servicios.forEach((servicio) => {
//       const option = document.createElement("option");
//       option.value = servicio.id;
//       option.text = servicio.nombre;
//       servicioDropdown.add(option);
//     });
//   })
//   .catch((error) => alertas.mostrarAlertaAdvertencia('warning', 'Advertencia', 'Error al obtener los servicios..👿..' + error));

 
// // Función para guardar la factura
// function guardarFacturaCliente() {
// // Obtener los valores de los campos
//      const cliente = document.getElementById("clienteDropdown").value;
//      const servicio = document.getElementById("servicioDropdown").value;
//      const fecha = document.getElementById("fecha").value;
//      const referenciaPago = document.getElementById("referencia").value;
//      const fechaVencimiento = document.getElementById("fecha_vencimiento").value;
//      const cantidad = document.getElementById("cantidad").value;
//      const precio = document.getElementById("precio").value;
//      const impuesto = document.getElementById("iva").value;
//      const total = document.getElementById("total").value;

//      // Comprobar que los campos no estén vacíos
//      if (
//         cliente.length === 0 ||
//         servicio.length === 0 ||
//         fecha.length === 0 ||
//         referenciaPago.length === 0 ||
//         fechaVencimiento.length === 0 ||
//         servicio.length === 0 ||
//         cantidad === "" ||
//         precio === "" ||
//         impuesto === "" ||
//         total === "")
//         {
//        // Mostrar mensaje de error
//       alertas.mostrarAlertaError('error', 'Error...', 'Por favor, rellena todos los campos.');
//         return;
//      }
// // Enviar datos al servidor 
//   document.addEventListener('DOMContentLoaded', (event) => {
//     const form = document.getElementById('formFactura');
//     form.addEventListener('submit', enviarDatos);
//   });
// const url = "http://localhost:4000/api/v1/facturas/crearFactura/";
// fetch(url, {
//   method: "post",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     id_cliente: cliente,
//     id_servicio: servicio,
//     Fecha_factura: fecha,         
//     Referencia_pago: referenciaPago,
//     Fecha_vencimiento: fechaVencimiento,
//     Servicio: servicio,
//     Cantidad: cantidad,
//     Precio: precio,
//     Impuesto: impuesto,
//     Total: total
//   })
// })
// .then((res) => res.json())
// .then((factura) => {
//  // Mostrar la factura en la interfaz
//  const facturaElement = document.createElement("div");
//  facturaElement.classList.add("factura");
//  facturaElement.innerHTML = `
//     <p>ID: ${factura.id}</p>
//     <p>Cliente: ${factura.cliente}</p>
//     <p>Servicio: ${factura.servicio}</p>
//     <p>Fecha: ${factura.fecha}</p>
//     <p>Fecha de Vencimiento: ${factura.fechaVencimiento}</p>
//     <p>Precio: ${factura.precio}</p>
//     <p>Impuesto: ${factura.impuesto}</p>
//     <p>Total: ${factura.total}</p>
//          `;
// // Agregar la factura al contenedor
// contenedorFacturasCreadas.appendChild(facturaElement);
//    // Limpiar los campos del formulario
//    document.getElementById("fecha").value = "";
//    document.getElementById("referencia").value = "";
//    document.getElementById("fecha_vencimiento").value = "";
//    document.getElementById("servicio").value = "";
//    document.getElementById("cantidad").value = "";
//    document.getElementById("precio").value = "";
//    document.getElementById("impuesto").value = "";
//    document.getElementById("total").value = "";
//    // Mostrar mensaje de éxito
//    alertas.mostrarAlerta('success', '¡Guardado!', 'Factura guardada correctamente.')
//        })
//        .catch((error) => {
//          // Mostrar mensaje de error
//           alertas.mostrarAlerta('error', 'Oops...', 'Error al guardar la factura..👿..' + error);
//        });
//    }
// // Función para calcular el importe total de la línea
// function calcularImporteTotal(input) {
//   const cantidad = parseFloat(input.parentElement.querySelector('input:nth-child(3)').value);
//   const precio = parseFloat(input.parentElement.querySelector('input:nth-child(4)').value);
//   const iva = parseFloat(input.value);
//   const importeTotal = (cantidad * precio) * (1 + iva / 100);
//        // Mostrar el importe total en la interfaz
//   input.parentElement.querySelector('input:nth-child(5)').value = importeTotal.toFixed(2);
//        // Recalcular el subtotal, el impuesto y el total
//        calcularSubtotal();
//      }
     
// // Función para calcular el subtotal, el impuesto y el total
// function calcularSubtotal() {
//   let subtotal = 0;
//   const importes = document.querySelectorAll('.nuevaLinea input:nth-child(5)');
//   importes.forEach(importe => {
//     subtotal += parseFloat(importe.value);
//      });
//      const impuesto = subtotal * 0.21;
//      const total = subtotal + impuesto;
// // Mostrar el subtotal, el impuesto y el total en la interfaz
//      document.getElementById('subtotal').textContent = subtotal.toFixed(2);
//      document.getElementById('iva').textContent = impuesto.toFixed(2);
//      document.getElementById('total').textContent = total.toFixed(2);
//    }


// evento para mostrar el formulario de crear la factura
document.addEventListener('DOMContentLoaded', () => {
  const agregarFactura = document.getElementById('agregar_factura');
  if (agregarFactura) {
    agregarFactura.addEventListener('click', function () {
  document.getElementById('formFactura').classList.remove('hide');
  document.getElementById('contenedorFacturasCreadas').classList.add('hide');
  document.getElementById('modalEditarFactura').classList.add('hide');
  document.getElementById('seccion_derecha').classList.add('hide');
    });
  }else{
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón no se encontró en el documento.');
	}
});

//evento para ver las facturas existentes
document.addEventListener('DOMContentLoaded', function () {
  const verFacturas = document.getElementById('ver-facturas');
  if (verFacturas) {
    verFacturas.addEventListener('click', function () {
      document.getElementById('formFactura').classList.add('hide');
    document.getElementById('contenedorFacturasCreadas').classList.remove('hide');
    document.getElementById('facturasCreadas').classList.remove('hide');
    document.getElementById('titulo_facturas_creadas').classList.remove('hide');
    document.getElementById('modalEditarFactura').classList.add('hide');
  });
}else {
  alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-facturas" no se encontró en el documento.');
}
});

//evento para agregar una linea en el cuerpo de la factura
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('agregarLinea').addEventListener('click', agregarNuevaLinea);
llenarDropdowns();
const form = document.getElementById('formFactura');
  form.addEventListener('submit', enviarDatos);
});

//funciones agregar linea 
function agregarNuevaLinea() {
  const nuevosCampos = document.getElementById('nuevosCampos');
  const nuevaLinea = document.createElement('div');
  nuevaLinea.classList.add('nuevaLinea');
  nuevaLinea.innerHTML = `
    <select class="servicioDropdown" placeholder="Seleccionar servicio...">
    </select>
    <input type="text" class="descripcion" placeholder="Descripción">
    <input type="text" class="cantidad" placeholder="Cantidad">
    <input type="text" class="precio" placeholder="Precio">
    <input type="text" class="impuesto" placeholder="Precio sin IVA %" onchange="calcularImporteTotal(this)">
  `;
  nuevosCampos.appendChild(nuevaLinea);
}

function llenarDropdowns() {
  const clienteDropdown = document.getElementById("clienteDropdown");

  fetch("http://localhost:3000/api/v1/clientes/obtenerClientes")
    .then((response) => response.json())
    .then((clientes) => {
      clientes.forEach((cliente) => {
        const option = document.createElement("option");
        option.value = cliente.id;
        option.text = cliente.nombre;
        clienteDropdown.add(option);
      });
    })
    .catch((error) => alertas.mostrarAlertaError('error', 'Oops...', 'Error al obtener los clientes..👿..' + error));

  const servicioDropdown = document.getElementById("servicioDropdown");
  fetch("http://localhost:5000/api/v1/servicios/obtenerServicio")
    .then((response) => response.json())
    .then((servicios) => {
      servicios.forEach((servicio) => {
        const option = document.createElement("option");
        option.value = servicio.id;
        option.text = servicio.nombre;
        servicioDropdown.add(option);
      });
    })
    .catch((error) => alertas.mostrarAlertaAdvertencia('warning', 'Advertencia', 'Error al obtener los servicios..👿..' + error));
}

// funcion guardar factura
function guardarFacturaCliente() {
  const clienteDropdown = document.getElementById("clienteDropdown").value;
  const servicioDropdown = document.getElementById("servicioDropdown").value;
  const fechaInput = document.getElementById("fecha").value;
  const referenciaInput= document.getElementById("referencia").value;
  const fechaVencimientoInput = document.getElementById("fecha_vencimiento").value;
  if (!clienteDropdown || !servicioDropdown || !fechaInput || !referenciaInput || !fechaVencimientoInput) {
    alertas.mostrarAlerta('error', 'Error...', 'Uno o más elementos del DOM no se cargaron correctamente.');
    return;
  }
  const idCliente = clienteDropdown.value;
  const idServicio = servicioDropdown.value;
  const fecha = fechaInput.value;
  const referenciaPago = referenciaInput.value;
  const fechaVencimiento = fechaVencimientoInput.value;

  const lineas = document.querySelectorAll('.nuevaLinea');
  const facturas = Array.from(lineas).map(linea => {
    const cantidad = linea.querySelector('.cantidad').value;
    const precio = linea.querySelector('.precio').value;
    const impuesto = linea.querySelector('.impuesto').value;
    const total = cantidad * precio * (1 + impuesto / 100);

    enviarDatos(idCliente, idServicio, fecha, referenciaPago, fechaVencimiento, cantidad, precio, impuesto, total);
    return {
      id_cliente: idCliente,
      id_servicio: idServicio,
      Fecha_factura: fecha,
      Referencia_pago: referenciaPago,
      Fecha_vencimiento: fechaVencimiento,
      Cantidad: cantidad,
      Precio: precio,
      Impuesto: impuesto,
      Total: total
    };
  });
}


function enviarDatos(event) {
    event.preventDefault();
    //recoger los datos del formulario
    const form = document.getElementById('formFactura');
    const datos = new FormData(form);
    //convertir los datos a JSON
  const jsonObject = {};
  for (const [key, value] of datos.entries()) {
    jsonObject[key] = value;
  }
    //enviar los datos a la API
    // facturas.forEach(factura => {
    const url = "http://localhost:3000/api/v1/facturas/crearFactura/";
    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(factura)
    })
      .then((res) => res.json())
      .then((factura) => {
        // Mostrar la factura en la interfaz
        const facturaElement = document.getElementById("facturasCreadasContenido");
        facturaElement.classList.remove('hide');
        facturaElement.innerHTML = `
          <p>ID: ${factura.id}</p>
          <p>Cliente: ${factura.cliente}</p>
          <p>Servicio: ${factura.servicio}</p>
          <p>Fecha: ${factura.fecha}</p>
          <p>Fecha de Vencimiento: ${factura.fechaVencimiento}</p>
          <p>Precio: ${factura.precio}</p>
          <p>Impuesto: ${factura.impuesto}</p>
          <p>Total: ${factura.total}</p>
        `;
        // Agregar la factura al contenedor
        contenedorFacturasCreadas.appendChild(facturaElement);
        // Limpiar los campos del formulario
        document.getElementById("fecha").value = "";
        document.getElementById("referencia").value = "";
        document.getElementById("fecha_vencimiento").value = "";
        document.getElementById("servicio").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("impuesto").value = "";
        document.getElementById("total").value = "";
        // Mostrar mensaje de éxito
        alertas.mostrarAlerta('success', '¡Guardado!', 'Factura guardada correctamente.')
      })
      .catch((error) => {
        // Mostrar mensaje de error
        alertas.mostrarAlerta('error', 'Oops...', 'Error al guardar la factura..👿..' + error);
      });
  
}





function calcularImporteTotal(input) {
  const cantidad = parseFloat(input.parentElement.querySelector('.cantidad').value);
  const precio = parseFloat(input.parentElement.querySelector('.precio').value);
  const iva = parseFloat(input.value);
  const importeTotal = (cantidad * precio) * (1 + iva / 100);
  // Mostrar el importe total en la interfaz
  input.parentElement.querySelector('.total').value = importeTotal.toFixed(2);
  // Recalcular el subtotal, el impuesto y el total
  calcularSubtotal();
}

function calcularSubtotal() {
  let subtotal = 0;
  const importes = document.querySelectorAll('.nuevaLinea .total');
  importes.forEach(importe => {
    subtotal += parseFloat(importe.value);
  });
  const impuesto = subtotal * 0.21;
  const total = subtotal + impuesto;
  // Mostrar el subtotal, el impuesto y el total en la interfaz
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('iva').textContent = impuesto.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}













// Obtener el contenedor de las facturas creadas
// const contenedorFacturasCreadas = document.getElementById("contenedorFacturasCreadas");

// // Función para mostrar las facturas en el contenedor
// function mostrarFacturas(facturas) {
// // Limpiar el contenedor
// contenedorFacturasCreadas.innerHTML = "";
// // Recorrer las facturas y crear elementos para mostrarlas
//      facturas.forEach(factura => {
//        const facturaElement = document.createElement("div");
//        facturaElement.classList.add("factura");
//        facturaElement.innerHTML = `
//          <p>ID: ${factura.id}</p>
//          <p>Cliente: ${factura.cliente}</p>
//          <p>Fecha: ${factura.fecha}</p>
//          <p>Referencia de Pago: ${factura.referenciaPago}</p>
//          <p>Fecha de Vencimiento: ${factura.fechaVencimiento}</p>
//          <p>Servicio: ${factura.servicio}</p>
//          <p>Cantidad: ${factura.cantidad}</p>
//          <p>Precio: ${factura.precio}</p>
//          <p>Impuesto: ${factura.impuesto}</p>
//          <p>Total: ${factura.total}</p>
//        `;
   
//        // Agregar la factura al contenedor
//        contenedorFacturasCreadas.appendChild(facturaElement);
//      });
//    }
   
   
 
//obtener las facturas
function obtenerTodasLasFacturas() {
  fetch('http://localhost:3000/api/v1/facturas/leerFacturas')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener las facturas');
    }
    return response.json();
  })
  .then(data => {
    console.log('Facturas obtenidas:', data);
           // Aquí puedes realizar acciones adicionales con los datos de las facturas, si es necesario
         })
         .catch(error => {
           console.error('Error al obtener las facturas:', error);
         });
     }
   
   
    
// Actualizar una factura
function actualizarFactura(id, datosActualizados) {
  fetch(`http://localhost:3000/api/v1/facturas/editarFactura/${id}`, {
      method: 'PUT',
      headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(datosActualizados)
       })
         .then(async(response) => res.json())
         .then ((factura) =>{
            if (factura.ok) {
                alertas.mostrarAlertaExito('success', '¡Actualizado!', 'Factura actualizada correctamente.')
                    .then(() => {
                        setTimeout(() => {
                            location.reload(); // refresca página
                          }, 3000);
                          obtenerTodasLasFacturas();
                    });
                    } else {
                        alertas.mostrarAlerta('error', 'Oops...', 'Error al actualizar la factura..👿..'+ facturaActualizada.mensaje)
                        }
                        });
                    }



   
   // Borrar una factura
   function borrarFactura(id) {
       fetch(`http://localhost:3000/api/v1/facturas/borrarFactura/${id}`, {
           method: 'DELETE'
       })
       .then(async(response) => {
        const deleteFactura = await response.json();
        if (deleteFactura.mensaje === 'Factura eliminada correctamente') {
          //elimino el elemento del dom
          const facturaAEliminar = document.getElementById(`factura-${id}`);
          facturaAEliminar.remove();
          // Para mostrar un éxito
          alertas.mostrarAlerta('success', '¡Eliminado!', 'Cliente eliminado correctamente.')
          .then(() => {
            setTimeout(() => { mensajes.textContent = ""; }, 4000);
          });
        }else{
          alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar el cliente..👿..'+ deleteCliente.mensaje);
        }
      })
      .catch((error) => {
        alertas.mostrarAlertaAdvertencia('warning', 'Oops...', 'Error al eliminar el cliente..👿..'+ error);
      });
    }
  













// document.addEventListener('DOMContentLoaded', function () {
// // Obtener referencia al enlace de Facturas
//     const facturasLink = document.getElementById('facturas');

//     //  evento de clic al enlace de Facturas
//     facturasLink.addEventListener('click', function (event) {
//         event.preventDefault(); 
//         cargarYMostrarBotonesFactura(); // Mostrar los botones de añadir factura y ver facturas creadas
//     });
// });

// // Función para cargar el contenido de facturas.html y mostrar los botones
// function cargarYMostrarBotonesFactura() {
//     fetch('facturas.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('seccion_derecha').innerHTML = data;
//             cargarFacturasEventListeners(); // Agregar event listeners para los botones de facturas
//         });
// }
// // Event listeners de facturas
// function cargarFacturasEventListeners() {
//     // Evento de clic al botón "Crear Factura" para mostrar el formulario de creación de factura
//     document.getElementById('crear_factura').addEventListener('click', function (event) {
//         event.preventDefault();
//         mostrarFormularioFactura();
//     });

//     // Evento de clic al botón "Ver Facturas" para mostrar las facturas creadas
//     document.getElementById('ver_facturas').addEventListener('click', function (event) {
//         event.preventDefault();
//         mostrarFacturas();
//     });
// }

// // Función para mostrar los botones de factura
// function mostrarBotonesFactura() {
//      const seccionDerecha = document.getElementById("seccion_derecha");
//     seccionDerecha.innerHTML = "";
    
//     const facturasButtonsDiv = document.createElement('div');
//     facturasButtonsDiv.id = 'facturas-buttons';

//         // Botón de añadir factura
//     const agregarFacturaBtn = document.createElement('button');
//     agregarFacturaBtn.id = 'agregar-factura-btn';
//     agregarFacturaBtn.textContent = 'Nuevo';
//     agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
//     facturasButtonsDiv.appendChild(agregarFacturaBtn);

//         // Botón de ver facturas creadas
//     const verFacturasBtn = document.createElement('button');
//     verFacturasBtn.id = 'ver-facturas-btn';
//     verFacturasBtn.textContent = 'Facturas';
//     facturasButtonsDiv.appendChild(verFacturasBtn);

//         // Agregar los botones al DOM
//     seccionDerecha.appendChild(facturasButtonsDiv);
//     // event listeners a los botones
//     cargarFacturasEventListeners();
//     }

// // Función para mostrar el formulario de agregar factura
// function mostrarFormularioFactura() {
//     const facturaForm = document.getElementById("formulario-factura");
//     if (facturaForm) {
//         facturaForm.style.display = 'block'; // Mostrar el formulario
//     } else {
//      console.error("El elemento formulario-factura no se encontró en el DOM.");
//         }
//     }

// // Funcion para guardar la factura


// function guardarFactura() {
//     console.log("Guardar factura");

//     const id = document.getElementById('id').value;
//     const cliente = document.getElementById('cliente').value;
   
// }

// // Función para ver las facturas existentes
// function verFacturas() {
   
// console.log("Mostrar facturas existentes");

// }

// // Cuando el DOM esté cargado, mostrar los botones de factura
// document.addEventListener('DOMContentLoaded', mostrarBotonesFactura);

// Event listeners de facturas
  
//  document.addEventListener('DOMContentLoaded', function() {
//      // Obtener referencia al botón "Añadir Factura"
//     const agregarFacturaBtn = document.getElementById('agregar-factura-btn');
//         if (agregarFacturaBtn) {
//             agregarFacturaBtn.addEventListener('click', mostrarFormularioFactura);
//         } else {
//             console.error('No se encontró el botón "Añadir Factura" en el DOM.');
//         }
// // Obtener referencia al botón "Guardar"
// const guardarBtn = document.getElementById('agregar_factura');
// if (guardarBtn) {
//     guardarBtn.addEventListener('click', guardarFactura);
// } else {
//     console.error('No se encontró el botón "Guardar" en el DOM.');
// }

//  // Obtener referencia al botón "Ver Facturas"
//         const verFacturasBtn = document.getElementById('ver-facturas-btn');
//         if (verFacturasBtn) {
//             verFacturasBtn.addEventListener('click', verFacturas);
//         } else {
//             console.error('No se encontró el botón "Ver Facturas" en el DOM.');
//         }
//     });  




	


  
