function isValidCorreo(correo) {
    // Expresión regular para validar un formato de correo electrónico simple
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }
  
  module.exports = {
    isValidCorreo: isValidCorreo
  };
