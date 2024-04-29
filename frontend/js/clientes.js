// Objetivo: Manejar las operaciones CRUD de los clientes en el frontend
import alertas from '../js/alertas.js';

// DOM
//click en el botón de agregar cliente (CLIENTES NUEVOS)
document.addEventListener('DOMContentLoaded', () => {
  const btnAgregarCliente = document.getElementById('agregar_cliente');
  if (btnAgregarCliente) {
    btnAgregarCliente.addEventListener('click', () => {
  document.getElementById('tarjeta').classList.remove('hide');
  document.getElementById('clientesCreados').classList.add('hide');
  document.getElementById('modal-editar-cliente').classList.add('hide');
});
}else{
  alertas.mostrarAlertaError('error', 'Error', 'Error al obtener el botón de agregar cliente..👻..');
}
});

//click en el boton de obtener los clientes (TODOS LOS CLIENTES)
document.addEventListener('DOMContentLoaded', () => {
  const btnVerClientes = document.getElementById('ver-clientes');
  if (btnVerClientes) {
    btnVerClientes.addEventListener('click', () => {
  obtenerClientes();
  document.getElementById('clientesCreados').classList.remove('hide');
  document.getElementById('tarjeta').classList.add('hide');
  document.getElementById('modal-editar-cliente').classList.add('hide');
});
} else {
  alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-servicios" no se encontró en el documento.');
}
});


//CRUD POST Crear un nuevo cliente (btnGuardarClientes)
const btnGuardarClientes = document.getElementById('btnGuardarClientes');
btnGuardarClientes.addEventListener('click', async () => {
  // Obtener valores de los elementos de entrada
  const nombre = document.getElementById('nombre').value;
  const nif = document.getElementById('nif').value;
  const calle = document.getElementById('calle').value;
  const provincia = document.getElementById('provincia').value;
  const ciudad = document.getElementById('ciudad').value;
  const codigopostal = document.getElementById('codigo-postal').value;
  const pais = document.getElementById('pais').value;
  const telefono = document.getElementById('telefono').value;
  const movil = document.getElementById('movil').value;
  const correoelectronico = document.getElementById('correo-electronico').value;
  // validar que los campos no estén vacíos
  if (nombre === '' || nif === '' || calle === '' || provincia === '' || ciudad === '' || codigopostal === '' || pais === '' || telefono === '' || movil === '' || correoelectronico === '') {  
    // Para mostrar un error
    alertas.mostrarAlertaError('error', 'Oops...', 'Por favor, rellene todos los campos.');
    return;
  }
  const url = 'http://localhost:3000/api/v1/clientes/crearCliente';
  try {
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Nombre: nombre,
        nif: nif,
        Calle: calle,
        Provincia: provincia,
        Ciudad: ciudad,
        CodigoPostal: codigopostal,
        Pais: pais,
        Telefono: telefono,
        Movil: movil,
        CorreoElectronico: correoelectronico
      })
    });
    // Verificar si la respuesta fue exitosa
    if (!respuesta.ok) {
      // Si la respuesta no fue exitosa, lanzar un error
      throw new Error('La solicitud no pudo ser completada correctamente.');
    }
    
    // Para mostrar un éxito
    alertas.mostrarAlerta('success', '¡Hecho!', 'Cliente creado correctamente.');
    // Limpiar los campos después de guardar el servicio
    document.getElementById('nombre').value = '';
    document.getElementById('nif').value = '';
    document.getElementById('calle').value = '';
    document.getElementById('provincia').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('codigo-postal').value = '';
    document.getElementById('pais').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('movil').value = '';
    document.getElementById('correo-electronico').value = '';
  } catch (error) {
    // Para mostrar un error con una variable
    alertas.mostrarAlertaError('error', 'Oops...', 'Algo salió mal....' + error); 
  }
});  
   



//CRUD GET Obtener todos los clientes
async function obtenerClientes() {
  try {
    const url = 'http://localhost:3000/api/v1/clientes/obtenerClientes';
    let idClienteEditar = '';
    const response = await fetch(url);
    const clientes = await response.json();
    const clientesCreados = document.getElementById('clientesCreados');
    clientesCreados.innerHTML = '';
    let resultado = '';
    if (clientes.length > 0) {
      clientes.forEach((cliente) => {
      resultado +=
         `
       <div class="cliente_añadido">
          <p><i class="fa-solid fa-user-large"></i></p>
          <p>Id: ${cliente.id}</p>
          <p>Id-Servicio: ${cliente.id_servicio}</p>
          <p>Servicio: ${cliente.servicio}</p>
          <p>Nombre: ${cliente.Nombre}</p>
          <p>Nif: ${cliente.nif}</p>
          <p>Calle: ${cliente.Calle}</p>
          <p>Provincia: ${cliente.Provincia}</p>
          <p>Ciudad: ${cliente.Ciudad}</p>
          <p>Código Postal: ${cliente.CodigoPostal}</p>
          <p>País: ${cliente.Pais}</p>
          <p>Teléfono: ${cliente.Telefono}</p>
          <p>Móvil: ${cliente.Movil}</p>
          <p>Correo Electrónico: ${cliente.CorreoElectronico}</p>
          <button type="button" class="btn-editarCliente-${cliente.id}">Editar</button>
          <button type="button" id="btn-eliminarCliente-${cliente.id}">Eliminar</button>
          <button type="button" id="btn-asignar-servicios-${cliente.id}">Asignar Servicios</button>
        </div>
        `;
        clientesCreados.innerHTML = resultado;
      });
    } else {
      clientesCreados.innerHTML = '<p>No hay clientes registrados.</p>';
    }
  } catch (error) {
    alertas.mostrarAlertaError('error', 'Oops...', 'Error al obtener los clientes..👻..' + error)
    }
    }
    obtenerClientes();


  



//evento de click al boton de editar (EDITAR CLIENTE)
document.addEventListener('DOMContentLoaded', () => {
  // document.getElementById(`btn-editarCliente-${cliente.id}`).forEach(btnEditar => {
    const btn = document.querySelectorAll(`.btn-editarCliente-${cliente.id}`).forEach(btn => {
    const clienteId = btn.id.split('-')[1]; });// Obtener el ID del cliente del ID del botón
    if (btn) {
    btn.addEventListener('click', () => {
alert('hola btn de los cojones');
    //mostrar el modal para editar el cliente
    document.getElementById('modal-editar-cliente').classList.remove('hide');
    clientesCreados.classList.add('hide');
    // Llenar el modal con los datos actuales del cliente
    document.getElementById('nombre-editar').value = cliente.Nombre;
    document.getElementById('Nif-editar').value = cliente.nif;
    document.getElementById('calle-editar').value = cliente.Calle;
    document.getElementById('provincia-editar').value = cliente.Provincia;
    document.getElementById('ciudad-editar').value = cliente.Ciudad;
    document.getElementById('codigo-postal-editar').value = cliente.CodigoPostal;
    document.getElementById('pais-editar').value = cliente.Pais;
    document.getElementById('telefono-editar').value = cliente.Telefono;
    document.getElementById('movil-editar').value = cliente.Movil;
    document.getElementById('correo-electronico-editar').value = cliente.CorreoElectronico;
    // Guardar el id del cliente que se está editando
    idClienteEditar = cliente.id;
        });
      }
//evento de clic al boton de guardar en el modal
  const btnGuardarEditarCliente = document.querySelector('.btnGuardarEditarCliente');
//verificar si el boton de guardar en el modal tiene un evento de clic
  const oldEventListener = btnGuardarEditarCliente.onclick;
    if (oldEventListener) {
    btnGuardarEditarCliente.removeEventListener('click', oldEventListener);
        }
  //evento de clic al boton de guardar en el modal
  btnGuardarEditarCliente.addEventListener('click', function () {
    const clienteEditado = {
      Nombre: document.getElementById('nombre-editar').value,
      nif: document.getElementById('Nif-editar').value,
            Calle: document.getElementById('calle-editar').value,
            Provincia: document.getElementById('provincia-editar').value,
            Ciudad: document.getElementById('ciudad-editar').value,
            CodigoPostal: document.getElementById('codigo-postal-editar').value,
            Pais: document.getElementById('pais-editar').value,
            Telefono: document.getElementById('telefono-editar').value,
            Movil: document.getElementById('movil-editar').value,
            CorreoElectronico: document.getElementById('correo-electronico-editar').value
          };
          editarCliente(idClienteEditar, clienteEditado);
          // Ocultar el modal
          document.getElementById('modal-editar-cliente').classList.add('hide');
          // Mostrar los clientes creados
          document.getElementById('clientesCreados').classList.remove('hide');
        });
      });
    
  

        
//evento de click al boton de eliminar (ELIMINAR CLIENTE)
  document.addEventListener('DOMContentLoaded', () => {
  // document.getElementById(`btn-eliminarCliente-${cliente.id}`).forEach(btn => {
    document.querySelectorAll('[id^="btn-eliminarCliente-"]').forEach(btn => {
      const clienteId = btn.id.split('-')[1];
      btn.addEventListener('click', () => {
          Swal.fire({
            title: '¿Estás seguro de que deseas eliminar este cliente?',
            showDenyButton: true,
            confirmButtonText: `Si`,
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              borrarCliente(cliente.id);
              Swal.fire(
                '¡Eliminado!',
                'El cliente ha sido eliminado.',
                'success'
              );
            }
          });
        });
      });
    });

//eventListener al boton de asignar servicios (ASIGNAR LOS SERVICIOS)
document.addEventListener('DOMContentLoaded', () => {
  // Buscar todos los botones de asignar servicios que coincidan con el patrón
    document.querySelectorAll('[id^="btn-asignar-servicios-"]').forEach(btn => {
  // Obtener el ID del cliente del ID del botón
    const clienteId = btn.id.split('-')[3];
  // Agregar un event listener para el clic en cada botón
      btn.addEventListener('click', () => {
  // Lógica para abrir el modal y asignar el servicio al cliente
      document.getElementById('modal-asignar-servicios').classList.remove('hide');
      document.getElementById('clientesCreados').classList.add('hide');
  
  // Llenar el modal con los datos actuales del cliente y del servicio
    document.getElementById('id-cliente').value = clienteId; // Usar el ID del cliente obtenido previamente
    document.getElementById('nombre-cliente').value = cliente.Nombre;
    document.getElementById('servicios-cliente').value = cliente.id_servicio;
          });
      });
      //evento de clic al boton de guardar en el modal
      const btnGuardarAsignarServicios = document.querySelector('.btnGuardarAsignarServicios');
      //verificar si el boton de guardar en el modal tiene un evento de clic
      const oldEventListener = btnGuardarAsignarServicios.onclick;
      if (oldEventListener) {
        btnGuardarAsignarServicios.removeEventListener('click', oldEventListener);
      }
      //evento de clic al boton de guardar en el modal
      btnGuardarAsignarServicios.addEventListener('click', () => {
        const idCliente = document.getElementById('id-cliente').value;
        const idServicio = document.getElementById('servicios-cliente').value;
        asignarServicio(idCliente, idServicio);
        // Ocultar el modal
        document.getElementById('modal-asignar-servicios').classList.add('hide');
        // Mostrar los clientes creados
        document.getElementById('clientesCreados').classList.remove('hide');
      });
  });
    
   


 
      
//CRUD PUT Actualizar un cliente
const BASE_URL1 = 'http://localhost:3000/api/v1/clientes';
function editarCliente(id, clienteEditado) {
  const url = `${BASE_URL1}/editarCliente/${id}`;
  fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteEditado),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        alertas.mostrarAlertaExito('success', '¡Hecho!', 'Cliente actualizado correctamente.')
        .then(() =>{
          setTimeout(() => {
            location.reload(); // refresca página
          }, 3000);
          obtenerClientes();
        });
      }else{
        alertas.mostrarAlertaError('error', 'Error', 'Error al editar el cliente..👻..' + data.mensaje);
      }
    })
    .catch((error) => {
      alertas.mostrarAlertaAdvertencia('warning', 'Advertencia...', 'Error al editar el cliente..👿..' + error);
    });
}

//CRUD DELETE Eliminar un cliente //funcion para eliminar un cliente
const BASE_URL2 = 'http://localhost:3000/api/v1/clientes';
function borrarCliente(id) {
  const url = `${BASE_URL2}/borrarCliente/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
  .then(async(response) => {
    const deleteCliente = await response.json();
    if (deleteCliente.mensaje === 'Cliente eliminado correctamente') {
      //elimino el elemento del dom
      const clienteAEliminar = document.getElementById(`cliente-${id}`);
      clienteAEliminar.remove();
      // Para mostrar un éxito
      alertas.mostrarAlerta('success', '¡Eliminado!', 'Cliente eliminado correctamente.')
      .then(() => {
        setTimeout(() => { mensajes.textContent = ""; }, 4000);
      });
    }else{
      alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar el cliente..👿..' + deleteCliente.mensaje);
    }
  })
  .catch((error) => {
    alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar el cliente..👿..' + error);
  });
}


// función para asignar un servicio al cliente
async function asignarServicio(idCliente, idServicio) {
  try {
    // Obtener la lista de servicios disponibles
    const servicios = await obtenerServiciosDisponibles(idCliente);
    // Obtener el select de servicios
    const selectServicios = document.getElementById('servicios-cliente');
    selectServicios.innerHTML = '';
    // añadir una opción para cada servicio disponible
    servicios.forEach(servicio => {
      const option = document.createElement('option');
      option.value = servicio.id;
      option.textContent = servicio.Nombre;
      selectServicios.appendChild(option);
    });
    
// Realizar la solicitud POST para asignar el servicio al cliente
    const response = await fetch('http://localhost:3000/api/v1/clientes/asignarServicio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idCliente,
        idServicio // Usamos el ID del servicio seleccionado
      }),
    });
    const responseData = await response.json();
    // Notificar al usuario sobre el éxito
    const servicioAsignado = servicios.find(servicio => servicio.id === idServicio);
    if (servicioAsignado) {
      alertas.mostrarAlertaConfirmacion(`Servicio "${servicioAsignado.Nombre}" asignado al cliente.`);
    }
  } catch (error) {
    alertas.mostrarAlertaError('error', 'Error', 'Error al asignar el servicio al cliente..👻..' + error);
  }
}


// funcion para obtener la lista de servicios disponibles
async function obtenerServiciosDisponibles(idCliente) {
  try{
    const url = `http://localhost:4000/api/v1/servicios/obtenerServiciosCliente/${idCliente}`;
       const response = await fetch(url);
     const data = await response.json();
    return data;
  }
   catch(error){
     alertas.mostrarAlertaError('error', 'Error', 'Error al obtener los servicios disponibles..👻..' + error);  }
 }



 
// Función para habilitar el autocompletar en el campo de búsqueda
// function habilitarAutocompletar() {
//   const input = document.getElementById('autocomplete-servicios');
//   input.addEventListener('input', () => {
//     const term = input.value;
//     fetch(`/autocompletar-servicios?term=${term}`)
//       .then(response => response.json())
//       .then(data => {
//         const datalist = document.getElementById('servicios');
//         datalist.innerHTML = '';
//         data.forEach(servicio => {
//           const option = document.createElement('option');
//           option.value = servicio.Nombre;
//           datalist.appendChild(option);
//         });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
// }












