function esCorreoValidoLongitud(correo) {
    // Suponemos que un correo es válido si tiene entre 5 y 20 caracteres
    return correo.length >= 5 && correo.length <= 20;
  }
  
  module.exports = {
    esCorreoValidoLongitud: esCorreoValidoLongitud
  };