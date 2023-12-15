let cuentas = [
  { nombre: "Mali", saldo: 200, contraseña: "" },
  { nombre: "Gera", saldo: 290, contraseña: "" },
  { nombre: "Maui", saldo: 67, contraseña: "" }
];

let cuentaSeleccionada = 0;

function botonIniciarSesion(){
  primerInicio();
  iniciarSesion();
}

function primerInicio(){
  if (cuentas[cuentaSeleccionada].contraseña===""){
    let firstPassword = prompt("Esta es tu primera vez aquí. Establece tu contraseña:");
    let firstPasswordCheck = prompt("Confirma tu contraseña:");
    if (firstPassword === firstPasswordCheck && firstPassword !== ""){
      cuentas[cuentaSeleccionada].contraseña=firstPassword;
      alert("Todo listo. Ahora puedes acceder.");
    } else if (firstPassword!==firstPasswordCheck){
      alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
    } else {
      alert("Contraseña no válida. Inténtelo de nuevo.");
    }
  }
}

function iniciarSesion() {
  if (cuentas[cuentaSeleccionada].contraseña!==""){

    let password = prompt("Ingresa tu contraseña:");

    if (password) {
      if (password === cuentas[cuentaSeleccionada].contraseña) {
        document.getElementById("operaciones").style.display = "block";
        document.getElementById("seleccion").style.display="none"
        document.getElementById("saludo").innerText = "¡Bienvenido "+cuentas[cuentaSeleccionada].nombre+"!";
      } else {
        alert("Contraseña incorrecta. Inténtalo nuevamente.");
      }
    } else {
      alert("Contraseña no ingresada. Inténtalo nuevamente.");
    }
  }
}

function consultarSaldo() {
  actualizarResultado("Saldo actual: $" + cuentas[cuentaSeleccionada].saldo);
}

function ingresarMonto() {
  let monto = prompt("Ingresa el monto a ingresar:");
  
  if ((cuentas[cuentaSeleccionada].saldo+parseFloat(monto)) > 990) {
    alert("La transacción no cumple con la regla de negocio. Saldo no puede superar $990.");
  } else {
    if (monto && !isNaN(monto) && monto > 0) {
    monto = parseFloat(monto);
    cuentas[cuentaSeleccionada].saldo = cuentas[cuentaSeleccionada].saldo+monto;
    actualizarResultado("Ingresaste $" + monto + ". Nuevo saldo: $" + cuentas[cuentaSeleccionada].saldo);
    } else {
    alert("Ingresa un monto válido.");
    }
  }
}

function retirarMonto() {
  let monto = prompt("Ingresa el monto a retirar:");

    if (monto && !isNaN(monto) && monto > 0) {
      monto = parseFloat(monto);

    if (cuentas[cuentaSeleccionada].saldo - monto >= 10 && cuentas[cuentaSeleccionada].saldo - monto <= 990) {
      cuentas[cuentaSeleccionada].saldo -= monto;
      actualizarResultado("Retiraste $" + monto + ". Nuevo saldo: $" + cuentas[cuentaSeleccionada].saldo);
    } else {
      alert("La transacción no cumple con la regla de negocio. Saldo no puede ser menor a $10");
    }
  } else {
    alert("Ingresa un monto válido.");
  }
}

function regresar() {
  document.getElementById("operaciones").style.display = "none";
  document.getElementById("seleccion").style.display="block";
  document.getElementById("resultado").style.borderStyle="none";
  document.getElementById("resultado").innerText = "";
}

function actualizarResultado(mensaje) {
  document.getElementById("resultado").innerText = mensaje;
  document.getElementById("resultado").style.borderStyle="solid";
}

function cambiarContraseña(){
  let currentPassword = prompt("Ingresa tu contraseña actual:");
  if (currentPassword === cuentas[cuentaSeleccionada].contraseña){
    let newPassword = prompt("Ingresa tu nueva contraseña:");
    let newPasswordCheck = prompt("Confirma tu nueva contraseña:");
    if (newPassword===newPasswordCheck && newPassword != ""){
      cuentas[cuentaSeleccionada].contraseña=newPassword;
    } else if (newPassword!==newPasswordCheck){
      alert("Las contraseñas no coinciden. Inténtelo de nuevo.");
    } else {
      alert("Contraseña no válida. Inténtelo de nuevo.");
    }
  } else {
    alert("Contraseña incorrecta. Inténtelo nuevamente.");
  }
}

document.getElementById("cuentas").addEventListener("change", function() {
  cuentaSeleccionada = this.value;
});