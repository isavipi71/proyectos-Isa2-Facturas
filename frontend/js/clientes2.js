
// manejar la subida de las imagenes
// document.getElementById('subir-imagen').addEventListener('change', function(e) {
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     document.getElementsByClassName('imagen').src = event.target.result;
//   };
//   reader.readAsDataURL(e.target.files[0]);
// });


import alertas from './alertas.js';

// evento de click para deplegar el div que contiene los campos para rellenar y crear el nuevo servicio
document.addEventListener('DOMContentLoaded', function () {
const agregarClienteBtn = document.getElementById('agregar_cliente');
if (agregarClienteBtn) {
	agregarClienteBtn.addEventListener('click', function () {
		document.getElementById('tarjeta').classList.remove('hide');
		document.getElementById('clientesCreados').classList.add('hide');
		document.getElementById('modal-editar-cliente').classList.add('hide');
		document.getElementById('modal-asignar-servicios').classList.add('hide');
		// document.getElementById('seccion_derecha').classList.add('hide');
});
	}else{
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-clientes" no se encontró en el documento.');
	}
});

// evento de click para deplegar los servicios creados
document.addEventListener('DOMContentLoaded', function () {
	const verclientesBtn = document.getElementById('ver-clientes');
	const volverBtn = document.getElementById('btn-volver');
	if (verclientesBtn) {
		verclientesBtn.addEventListener('click', function () {
		obtenerClientes();
	document.getElementById('clientesCreados').classList.remove('hide');
	document.getElementById('tarjeta').classList.add('hide');
	document.getElementById('modal-editar-cliente').classList.add('hide');
	document.getElementById('seccion_derecha').classList.add('hide');
	document.getElementById('listadoClientes').classList.remove('hide');
	document.getElementById('modal-asignar-servicios').classList.add('hide');
});
	} else {
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-clientes" no se encontró en el documento.');
	}
	if (volverBtn) {
		volverBtn.addEventListener('click', function () {
		document.getElementById('clientesCreados').classList.remove('hide');
		document.getElementById('listadoClientes').classList.remove('hide');
		document.getElementById('tarjeta').classList.add('hide');
		document.getElementById('modal-editar-cliente').classList.add('hide');
		document.getElementById('seccion_derecha').classList.add('hide');
		document.getElementById('modal-asignar-servicios').classList.add('hide');
	});
	}else{
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "volver" no se encontró en el documento.');
	}
});


// click del boton de abrir el modal para asignar servicios
document.addEventListener('DOMContentLoaded', function () {
	const btnAsignarServicios = document.getElementById(`btn-asignar-servicios-${cliente.id}`);
	if (btnAsignarServicios) {
		btnAsignarServicios.addEventListener('click', function () {
  document.getElementById('modal-asignar-servicios').classList.remove('hide');
  document.getElementById('clientesCreados').classList.add('hide');
  document.getElementById('listadoClientes').classList.add('hide');
  document.getElementById('nombre-cliente').textContent = cliente.Nombre;
  document.getElementById('id-cliente').textContent = cliente.id;
  
});
	} else {
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "asignar-servicios" no se encontró en el documento.');
	}
});


///////////////////-------------------////////////////////////////////////////-------------------/////////////////////

	// CRUD  POST // Crear un nuevo servicio
document.addEventListener('DOMContentLoaded', function () {
// Acceder a los elementos después de que el documento esté completamente cargado
const btnGuardarClientes = document.getElementById('btnGuardarClientes');
const nombreInput = document.getElementById('nombre');
const nifInput = document.getElementById('nif');
const calleInput = document.getElementById('calle');
const provinciaInput = document.getElementById('provincia');
const ciudadInput = document.getElementById('ciudad');
const codigoPostalInput = document.getElementById('codigopostal');
const paisInput = document.getElementById('pais');
const telefonoInput = document.getElementById('telefono');
const movilInput = document.getElementById('movil');
const correoInput = document.getElementById('correoelectronico');
//verificar que coiinidan los nombre de los elemntos con la base de datos ...
if (btnGuardarClientes) {
		btnGuardarClientes.addEventListener('click', async () => {
				// Obtener valores de los elementos de entrada
				const nombreCliente = nombreInput.value;
				const nifCliente = nifInput.value;
				const calleCliente = calleInput.value;
				const provinciaCliente = provinciaInput.value;
				const ciudadCliente = ciudadInput.value;
				const codigoPostalCliente = codigoPostalInput.value;
				const paisCliente = paisInput.value;
				const telefonoCliente = telefonoInput.value;
				const movilCliente = movilInput.value;
				const correoCliente = correoInput.value;

	// Validar que los campos no estén vacíos
	if (nombreCliente === '' || nifCliente === '' || calleCliente === '' || provinciaCliente === '' || ciudadCliente === '' || codigoPostalCliente === '' || paisCliente === ''  ||  telefonoCliente === '' || movilCliente === '' || correoCliente === '') {
		// Para mostrar un error
		alertas.mostrarAlerta('error', 'Oops...', 'Por favor, rellene todos los campos.');
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
				Nombre: nombreCliente,
        nif: nifCliente,
        Calle: calleCliente,
        Provincia: provinciaCliente,
        Ciudad: ciudadCliente,
        CodigoPostal: codigoPostalCliente,
        Pais: paisCliente,
        Telefono: telefonoCliente,
        Movil: movilCliente,
        CorreoElectronico: correoCliente
			})
		});
		// Verificar si la respuesta fue exitosa
		if (!respuesta.ok) {
			// Si la respuesta no fue exitosa, lanzar un error
			throw new Error('La solicitud no pudo ser completada correctamente.');
		}
		// Para mostrar un éxito
		alertas.mostrarAlerta('success', '¡Hecho!', 'Servicio creado correctamente.');
		// Limpiar los campos después de guardar el servicio
		document.getElementById('nombre').value = '';
		document.getElementById('nif').value = '';
		document.getElementById('calle').value = '';
		document.getElementById('provincia').value = '';
		document.getElementById('ciudad').value = '';
		document.getElementById('codigopostal').value = '';
		document.getElementById('pais').value = '';
		document.getElementById('telefono').value = '';
		document.getElementById('movil').value = '';
		document.getElementById('correoelectronico').value = '';

	} catch (error) {
		// Para mostrar un error con una variable
		alertas.mostrarAlerta('error', 'Oops...', 'Algo salió mal....' + error);
	}
});
}
	else{
		alertas.mostrarAlerta('error', 'Oops...', '"El botón de guardar no se encontró en el documento."....');
	}
}, false);


///////////////////-------------------////////////////////////////////////////-------------------/////////////////////

	// CRUD  GET // Obtener todos los clientes
	async function obtenerClientes() {
		const url = 'http://localhost:3000/api/v1/clientes/obtenerClientes';
		let idClienteEditar = '';
		try {
			const response = await fetch(url);
			const data = await response.json();
	
			const listadoClientes = document.getElementById('listadoClientes');
			listadoClientes.innerHTML = '';
	
			if (data.length > 0) {
				data.forEach(cliente => {
					const nuevoCliente = document.createElement('div');
					nuevoCliente.classList.add('cliente_añadido');
					nuevoCliente.id = `cliente-${cliente.id}`;
					nuevoCliente.innerHTML = `
						<p><i class="fa-solid fa-user-large"></i></p>
						<p><span>Id:</span> <span>${cliente.id}</span></p>
						<p><span>Nombre:</span><span> ${cliente.Nombre}</span></p>
						<p><span>Nif:</span>  <span>${cliente.nif}</span></p>
						<p><span>Calle:</span>  <span>${cliente.Calle}</span></p>
						<p><span>Provincia:</span>  <span>${cliente.Provincia}</span></p>
						<p><span>Ciudad:</span>  <span>${cliente.Ciudad}</span></p>
						<p><span>Código Postal:</span>  <span>${cliente.CodigoPostal}</span></p>
						<p><span>País:</span>  <span>${cliente.Pais}</span></p>
						<p><span>Teléfono:</span>  <span>${cliente.Telefono}</span></p>
						<p><span>Móvil:</span> <span>${cliente.Movil}</span></p>
						<p><span>Correo Electrónico:</span>  <span>${cliente.CorreoElectronico}</span></p>
						<div class="botones">
							<button type="button" id="btn-editarCliente-${cliente.id}"><i class="fas fa-edit"></i></button>
							<button type="button" id="btn-eliminarCliente-${cliente.id}"><i class="fas fa-trash"></i></button>
							<button type="button" id="btn-asignar-servicios-${cliente.id}"><i class="fas fa-tasks"></i>Asignar Servicios</button>	
						</div>
					`;
	
					listadoClientes.appendChild(nuevoCliente);
					// Luego de crear el botón, llamas a la función
					agregarEventoAsignarServicios(cliente);
					agregarEventoGuardarAsignarServicio();
	// evento de click al boton de editar el cliente
					document.getElementById(`btn-editarCliente-${cliente.id}`).addEventListener('click', function () {
						//mostar el modal para editar el cliente
						document.getElementById('modal-editar-cliente').classList.remove('hide');
						document.getElementById('clientesCreados').classList.add('hide');
						listadoClientes.classList.add('hide');
	// llenar el modal con los datos del cliente
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
	// guardar el id del cliente a editar
						idClienteEditar = cliente.id;
					});
	// evento de click al boton de guardar el cliente editado
					const btnGuardarEditarCliente = document.getElementById('btnGuardarEditarCliente');
					const oldEventListener = btnGuardarEditarCliente.onclick;
					if (oldEventListener) {
						btnGuardarEditarCliente.removeEventListener('click', oldEventListener);
					}
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
	
						document.getElementById('modal-editar-cliente').classList.add('hide');
						document.getElementById('clientesCreados').classList.remove('hide');
						document.getElementById('listadoClientes').classList.remove('hide');
					});

// evento de click al boton de eliminar el cliente
document.getElementById(`btn-eliminarCliente-${cliente.id}`).addEventListener('click', function () {
	const btnEliminarCliente = document.getElementById(`btn-eliminarCliente-${cliente.id}`);
	if (btnEliminarCliente) {
		Swal.fire({
								title: '¿Estás seguro de que deseas eliminar este cliente?',
								text: "No podrás recuperarlo!!!... ¡Vuelve a pensarlo antes de eliminarlo!",
								icon: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Sí, ¡bórralo! 👍'
							}).then((result) => {
								if (result.isConfirmed) {
									borrarCliente(cliente.id);
								}
							});
						} else {
							alertas.mostrarAlerta('error', 'Oops...', 'Error al intentar eliminar el cliente. El botón no existe.');
						}
					});
				});
			}
		} catch (error) {
			alertas.mostrarAlerta('error', 'Oops...', 'Error al obtener los clientes!!!!' + error);
			setTimeout(() => {}, 4000);
		}
	}
	


		





///////////////////-------------------/////////////////////
// funcion para editar un servicio
const BASE_URL_Cliente = 'http://localhost:3000/api/v1/clientes/';
function editarCliente(id, clienteEditado) {
	const url = `${BASE_URL_Cliente}/editarCliente/${id}`; 
	fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clienteEditado),
  })
  .then(response => {
  if (!response.ok) {
	throw new Error('Error al editar el servicio');
  }
  return response.json();
})
  .then(() => {
    alertas.mostrarAlerta('success', '¡Editado!', 'Cliente actualizado correctamente.')
      .then(() => {
				obtenerClientes();
			});
		})
  .catch((error) => {
    alertas.mostrarAlerta('error', 'Oops...', 'Error al editar el cliente..👿..😹.' + Error);
  });
}

///////////////////-------------------/////////////////////

//funcion para eliminar un servicio
function borrarCliente(id) {
	fetch(`http://localhost:3000/api/v1/clientes/borrarCliente/${id}`, {
		method: 'DELETE',
	})
	.then(async (response) => {
		const deleteCliente = await response.json();
			if (deleteCliente.mensaje === 'Cliente borrado correctamente') {
				//elimino el elemento del dom
				const clienteAEliminar = document.getElementById(`cliente-${id}`);
				clienteAEliminar.remove();
				// Para mostrar un éxito
				alertas.mostrarAlerta('success', '¡Eliminado!', 'Cliente eliminado correctamente.')
				.then(() => {
					setTimeout(() => {}, 4000);
				});
			} else {
				alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar el cliente...Intentalo de nuevo!!!!' + error);
			}
		})
		.catch(error => {

			alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar!!!!' + error);
		});
}

///////////////////-------------------/////////////////////
function agregarEventoAsignarServicios(cliente) {
  const btnAsignarServicios = document.getElementById(`btn-asignar-servicios-${cliente.id}`);
  if (btnAsignarServicios) {
    btnAsignarServicios.addEventListener('click', function () {
			//obtener el modal de asignar servicios
			const modal = document.getElementById('modal-asignar-servicios');
			//obtner los camapos del modal
			const idClienteInput = document.getElementById('id-cliente');
			const nombreClienteInput = document.getElementById('nombre-cliente');
		  const selectServicios = document.getElementById('servicios-cliente');
			//asignar el id y el nombre a estos elementos
			idClienteInput.value = cliente.id;
			nombreClienteInput.value = cliente.Nombre;
			//obtener los servicios de la base de datos

			fetch('http://localhost:3000/api/v1/servicios/obtenerServicio')
			.then(response => {
				if (!response.ok) {
					throw new Error('Error al obtener los servicios');
				}
				return response.json();
			})
			.then(data => {
				console.log('Respuesta de la API:', data);
				const selectServicios = document.getElementById('servicios-cliente');
				selectServicios.innerHTML = '';
				data.forEach(servicio => {
					const option = document.createElement('option');
					option.value = servicio.id;
					option.textContent = servicio.Nombre;
					selectServicios.appendChild(option);
				});

			modal.classList.remove('hide');
      document.getElementById('clientesCreados').classList.add('hide');
      document.getElementById('listadoClientes').classList.add('hide');
				
			})
			.catch(error => {
				alertas.mostrarAlerta('error', 'Oops...', 'Error al obtener los servicios', error);
			});
    
    });
  } else {
    alertas.mostrarAlertaError('error', 'Oops...', 'El botón "asignar-servicios" no se encontró en el documento.');
  }
}
///////////////////-------------------/////////////////////
function agregarEventoGuardarAsignarServicio() {
  const btnGuardarAsignarServicio = document.querySelector('.btnGuardarAsignarServicios');
  if (btnGuardarAsignarServicio) {
    btnGuardarAsignarServicio.addEventListener('click', function () {
			const idCliente = document.getElementById('id-cliente').value;
			const nombreCliente = document.getElementById('nombre-cliente').value;
			asignarServicio(idCliente, idServicio);
			//obtner los elementos del dom para rellenar el objeto
			// const idClienteInput = document.getElementById('id-cliente');
			// const nombreClienteInput = document.getElementById('nombre-cliente');
			// const idServicioInput = document.getElementById('servicios-cliente');
			// //asignar el id y el nombre a estos elementos
			// idClienteInput.value = idCliente;
			// nombreClienteInput.value = nombreCliente;
			// idServicioInput.value = idServicio;

      // Lógica para guardar la asignación de servicios
      // const idCliente = document.getElementById('id-cliente').value;
      // const idServicio = document.getElementById('servicios-cliente').value;
     
      document.getElementById('modal-asignar-servicios').classList.add('hide');
      document.getElementById('clientesCreados').classList.remove('hide');
      document.getElementById('listadoClientes').classList.remove('hide');
    });
  } else {
    alertas.mostrarAlerta('error', 'Oops...', 'El botón de guardar asignar servicio no se encontró en el documento.');
  }
}

///////////////////-------------------/////////////////////

// Función para asignar un servicio a un cliente
async function asignarServicio(idCliente, idServicio) {
  try {
    const response = await fetch('http://localhost:3000/api/v1/clientes/asignarServicio', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idCliente, idServicio }),
    });

    if (!response.ok) {
      throw new Error('Error al asignar el servicio al cliente');
    }

    const data = await response.json();
    console.log('Servicio asignado con éxito:', data);
  } catch (error) {
		alertas.mostrarAlerta('error', 'Oops...', 'Error al asignar el servicio al cliente', error);
  }
}

