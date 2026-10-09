// Muestra u oculta el texto extra de una tarjeta.
// "id" es el nombre de la cajita que queremos abrir o cerrar.
function mostrar(id){
  var caja = document.getElementById(id);
  if(caja.style.display == "block"){
    caja.style.display = "none";   // si estaba abierta, se cierra
  }else{
    caja.style.display = "block";  // si estaba cerrada, se abre
  }
}
