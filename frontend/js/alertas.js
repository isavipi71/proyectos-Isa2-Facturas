function mostrarAlerta(tipo, titulo, mensaje) {
  return Swal.fire({
      icon: tipo,
      title: titulo,
      text: mensaje,
  });
}

function mostrarAlertaConfirmacion(titulo, mensaje, confirmButtonText, cancelButtonText) {
  return Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
  });
}

function mostrarAlertaInput(titulo, mensaje, input, confirmButtonText, cancelButtonText) {
  return Swal.fire({
      title: titulo,
      text: mensaje,
      input: input,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
  });
}

function mostrarAlertaError(mensaje) {
  return Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
  });
}

function mostrarAlertaExito(mensaje) {
  return Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: mensaje,
  });
}

function mostrarAlertaInfo(mensaje) {
  return Swal.fire({
      icon: 'info',
      title: 'Información',
      text: mensaje,
  });
}

function mostrarAlertaAdvertencia(mensaje) {
  return Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: mensaje,
  });
}

function mostrarAlertaCargando(mensaje) {
  return Swal.fire({
      title: mensaje,
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
          Swal.showLoading()
      }
  });
}

export default { mostrarAlerta, mostrarAlertaConfirmacion, mostrarAlertaInput, mostrarAlertaError, mostrarAlertaExito, mostrarAlertaInfo, mostrarAlertaAdvertencia, mostrarAlertaCargando };