function validarCorreo() {
    var correo = document.getElementById('correo').value;
    if (correo.includes('@')) {
        // El correo es válido, puedes realizar otras acciones aquí
        alert('Correo electrónico válido');
    } else {
        // Muestra una ventana emergente si no hay '@' en el correo
        alert('Ingrese un correo electrónico válido');
    }
}

console.log("4C");
console.log("Jose Alexander Palafox Bustos");
console.log("Ernesto Solís Ramírez");