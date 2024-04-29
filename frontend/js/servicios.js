import alertas from '../js/alertas.js';

//maneja un acordeon para que se despliegue el textarea para rellenar la descripcion del servicio
document.addEventListener('DOMContentLoaded', function () {
	//acordeon descripcion
	const acordeonToggle1 = document.getElementById('acordeon-toggle');
	const acordeonBtn1 = document.querySelector('.acordeon-btn1');
	acordeonToggle1.addEventListener('change', function () {
		if (this.checked) {
			acordeonBtn1.classList.add('active');
		} else {
			acordeonBtn1.classList.remove('active');
			// Limpiar el textarea cuando se cierra el acordeón
			document.querySelector('#description').value = '';
		}
	});
	//acordeón Información Adicional
	const acordeonToggle2 = document.getElementById('acordeon-toggle2');
	const acordeonBtn2 = document.querySelector('.acordeon-btn2');
	acordeonToggle2.addEventListener('change', function () {
		// const contenidoTextarea2 = this.parentElement.querySelector('#info-adic textarea');
		if (this.checked) {
			acordeonBtn2.classList.add('active');
		} else {
			acordeonBtn2.classList.remove('active');
			// Limpiar el textarea cuando se cierra el acordeón
			document.querySelector('#info-adic').value = '';
		}
	});
});

// evento de click para deplegar el div que contiene los campos para rellenar y crear el nuevo servicio
document.addEventListener('DOMContentLoaded', function () {
	const agregarServicioBtn = document.getElementById('agregar_servicio');
	if (agregarServicioBtn) {
		agregarServicioBtn.addEventListener('click', function () {
	document.getElementById('servicios_creados').classList.add('oculto');
	document.getElementById('servicios').classList.remove('oculto');
	document.getElementById('modal-editar-servicio').classList.add('oculto');
	document.getElementById('seccion_derecha').classList.add('oculto');
});
	}else{
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-servicios" no se encontró en el documento.');
	}
});

// evento de click para deplegar los servicios creados
document.addEventListener('DOMContentLoaded', function () {
	const verServiciosBtn = document.getElementById('ver-servicios');
	const volverBtn = document.getElementById('btn-volver');
	if (verServiciosBtn) {
		verServiciosBtn.addEventListener('click', function () {
		obtenerServicios();
	document.getElementById('servicios_creados').classList.remove('oculto');
	document.getElementById('servicios').classList.add('oculto');
	document.getElementById('modal-editar-servicio').classList.add('oculto');
	document.getElementById('seccion_derecha').classList.add('oculto');
});
	} else {
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "ver-servicios" no se encontró en el documento.');
	}
	if (volverBtn) {
		volverBtn.addEventListener('click', function () {
			document.getElementById('servicios_creados').classList.remove('oculto');
			document.getElementById('listaServicios').classList.remove('oculto');
			document.getElementById('servicios').classList.add('oculto');
			document.getElementById('modal-editar-servicio').classList.add('oculto');
			document.getElementById('seccion_derecha').classList.add('oculto');
		});
	}else{
		alertas.mostrarAlertaError('error', 'Oops...', 'El botón "volver" no se encontró en el documento.');
	}
	});




///////////////////-------------------////////////////////////////////////////-------------------/////////////////////

	// CRUD  POST // Crear un nuevo servicio
document.addEventListener('DOMContentLoaded', function () {
// Acceder a los elementos después de que el documento esté completamente cargado
const botonGuardarServicio = document.getElementById('btn-guardar-servicios');
const servicioInput = document.getElementById('servicio');
const precioInput = document.getElementById('precio');
const descripcionInput = document.getElementById('description');
const infoAdicionalInput = document.getElementById('info-adic');

if (botonGuardarServicio) {
		botonGuardarServicio.addEventListener('click', async () => {
				// Obtener valores de los elementos de entrada
				const nombreServicio = servicioInput.value;
				const precioServicio = precioInput.value;
				const descripcionServicio = descripcionInput.value;
				const infoAdicionalServicio = infoAdicionalInput.value;
	// Validar que los campos no estén vacíos
	if (nombreServicio === '' || precioServicio === '' || descripcionServicio === '' || infoAdicionalServicio === '') {
		// Para mostrar un error
		alertas.mostrarAlerta('error', 'Oops...', 'Por favor, rellene todos los campos.');
		return;
	}
	const url = 'http://localhost:3000/api/v1/servicios/crearServicio';
	try {
		const respuesta = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Nombre_Servicio: nombreServicio,
				Precio: precioServicio,
				Descripcion: descripcionServicio,
				Informacion_Adicional: infoAdicionalServicio
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
		document.getElementById('servicio').value = '';
		document.getElementById('precio').value = '';
		document.getElementById('description').value = '';
		document.getElementById('info-adic').value = '';
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

	// CRUD  GET // Obtener todos los servicios
async function obtenerServicios() {
	const url = 'http://localhost:3000/api/v1/servicios/obtenerServicio';
	let idServicioEditar = '';
	fetch(url)
	.then((res) => res.json())
	.then((data) => {
		const listaServicios = document.getElementById('listaServicios');
		listaServicios.innerHTML = '';
		if (data.length > 0) {
			data.forEach(servicio => {
				const nuevoServicio = document.createElement('div');
				nuevoServicio.classList.add('servicio_añadido');
				nuevoServicio.id = `servicio-${servicio.id}`;//se asigna el id al elemento
				nuevoServicio.innerHTML = `
				  <p><i class="fa-solid fa-broom"></i></p>
				  <p>Id: ${servicio.id}</p>
				  <p>Nombre: ${servicio.Nombre_Servicio}</p>
    			<p>Precio: ${servicio.Precio}</p>
    			<p>Descripción: ${servicio.Descripcion || 'No disponible'}</p>
    			<p>Información Adicional: ${servicio.Informacion_Adicional || 'No disponible'}</p>
    			<button type="button" id="btn-editar-${servicio.id}">Editar</button>
    			<button type="button" id="btn-eliminar-${servicio.id}">Eliminar</button>`;

				listaServicios.appendChild(nuevoServicio);
				//evento de click al boton de editar
				document.getElementById(`btn-editar-${servicio.id}`).addEventListener('click', function () {
					//mostrar el modal para editar el servicio
					document.getElementById('modal-editar-servicio').classList.remove('oculto');
					document.getElementById('servicios_creados').classList.add('oculto');
				  listaServicios.classList.add('oculto');
					// Llenar el modal con los datos actuales del servicio
					document.getElementById('nombre-servicio-editar').value = servicio.Nombre_Servicio;
					document.getElementById('precio-editar').value = servicio.Precio;
					document.getElementById('descripcion-editar').value = servicio.Descripcion || '';
					document.getElementById('info-adic-editar').value = servicio.Informacion_Adicional || '';
					// Guardar el id del servicio que se está editando
					idServicioEditar = servicio.id;
				});
				//obtener el boton de guardar del modal
				const btnGuardarEditar = document.getElementById('btn-guardar-editar');
				//verificar si el boton de guardar del modal tiene un evento de click
				const oldEventListener = btnGuardarEditar.onclick;
            if (oldEventListener) {
					//remover el evento de click
					btnGuardarEditar.removeEventListener('click', oldEventListener);
				}
				// AGREGAR EL NUEVO evento de click al boton de guardar en el modal
				btnGuardarEditar.addEventListener('click', function () {
					const servicioEditado = {
						Nombre_Servicio: document.getElementById('nombre-servicio-editar').value,
						Precio: document.getElementById('precio-editar').value,
						Descripcion: document.getElementById('descripcion-editar').value,
						Informacion_Adicional: document.getElementById('info-adic-editar').value
					};
					editarServicio(idServicioEditar, servicioEditado);
					// Ocultar el modal
					document.getElementById('modal-editar-servicio').classList.add('oculto');
					// Mostrar los servicios creados
					document.getElementById('servicios_creados').classList.remove('oculto');
					document.getElementById('listaServicios').classList.remove('oculto');
				});

				//capturando el id para eliminar el servicio
			document.getElementById(`btn-eliminar-${servicio.id}`).addEventListener('click', function () {
			//confirmar si se quiere eliminar el servicio
			Swal.fire({
			title: '¿Estás seguro de que deseas eliminar este servicio?',
			text: "No podrás recuperar este servicio!!!...Vuelve a pensarlo antes de eliminarlo!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, bórralo 👍 !'
			}).then((result) => {
			if (result.isConfirmed) {
				borrarServicio(servicio.id);
				Swal.fire(
					'¡Eliminado!',
					'El servicio ha sido eliminado.',
					'success'
						);
					}
				});
			});
		});
		const selectServicios = document.getElementById('servicios-cliente'); // Ajusta el ID según corresponda en tu HTML
		selectServicios.innerHTML = ''; // Limpiamos el contenido actual del select

		data.forEach(servicio => {
  	const option = document.createElement('option');
  	option.value = servicio.id;
  	option.textContent = servicio.Nombre_Servicio; // Ajusta esto según la estructura de tus datos de servicio
  	selectServicios.appendChild(option);
});
}
}).catch((error) => {
	alertas.mostrarAlerta('error', 'Oops...', 'Error al obtener los servicios!!!!' + error);
	setTimeout(() => {}, 4000);
				});
}


///////////////////-------------------/////////////////////
// funcion para editar un servicio
const BASE_URL = 'http://localhost:3000/api/v1/servicios/';
function editarServicio(id, servicioEditado) {
	const url = `${BASE_URL}/editarServicio/${id}`;
	fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(servicioEditado),
  })
  .then(response => {
  if (!response.ok) {
		alertas.mostrarAlerta('error', 'Oops...', 'Error al editar el servicio..👿');

  }
  return response.json();
})
  .then(() => {
    alertas.mostrarAlerta('success', '¡Editado!', 'Servicio editado correctamente.')
      .then(() => {
				obtenerServicios();
			});
		})
  .catch((error) => {

    alertas.mostrarAlerta('error', 'Oops...', 'Error al editar el servicio..👿.${error.message}', + error);
  });
}

///////////////////-------------------/////////////////////

//funcion para eliminar un servicio
function borrarServicio(id) {
	fetch(`http://localhost:3000/api/v1/servicios/borrarServicio/${id}`, {
		method: 'DELETE',
	})
	.then(async (response) => {
		const deleteS = await response.json();
			if (deleteS.mensaje === 'Servicio borrado correctamente') {
				//elimino el elemento del dom
				const servicioAEliminar = document.getElementById(`servicio-${id}`);
				servicioAEliminar.remove();
				// Para mostrar un éxito
				alertas.mostrarAlerta('success', '¡Eliminado!', 'Servicio eliminado correctamente.')
				.then(() => {
					setTimeout(() => { mensajes.textContent = ""; }, 4000);
				});
			} else {
				alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar el servicio...Intentalo de nuevo!!!!' + error);
			}
		})
		.catch(error => {
			console.error('Error al eliminar el servicio:', error);
			alertas.mostrarAlerta('error', 'Oops...', 'Error al eliminar!!!!');
		});
}










