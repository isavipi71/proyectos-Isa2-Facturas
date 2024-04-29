//toggle para mostrar y ocultar el formulario de crear un nuevo servicio
// Definir la función toggleMenu
function toggleMenu() {
  document.getElementById('seccion_izquierda').classList.toggle('collapsed');
}

// Agregar el escuchador de eventos DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  if (menuHamburguesa) {
    menuHamburguesa.addEventListener('click', toggleMenu);
  }
});

// ---------------------  Evento  ---------------------

// evento para mover un elemento hacia arriba(en este caso p)
document.getElementById('navPrincipal').addEventListener('click', function () {
  this.classList.add('mover-arriba');

  setTimeout(() => {
      this.classList.remove('mover-arriba');
  }, 1000); // Remueve la clase después de 1 segundo
});








// manejar la subida de las imagenes
// document.getElementById('subir-imagen').addEventListener('change', function(e) {
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     document.getElementsByClassName('imagen').src = event.target.result;
//   };
//   reader.readAsDataURL(e.target.files[0]);
// });


