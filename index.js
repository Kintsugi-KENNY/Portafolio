

function enviar() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;
  if (nombre == "") {
    alert("obligatorio llenar todos los espacios");
    document.getElementById("nombre").focus();
  } else {
    if (correo == "") {
      alert("Es obligatorio llenar todos los espacios");
      document.getElementById("correo").focus();
    } else {
      if (mensaje == "") {
        alert("Es obligatorio llenar todos los espacios");
        document.getElementById("mensaje").focus();
      } else {
        console.log(nombre + " " + correo + " " + mensaje);
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("nombre").focus();
      }
    }
  }
}