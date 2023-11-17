const validarCorreo2 = require('./validarCorreo2');

test('correo con carácter especial pabaal13@gmail.com - false', () => {
  expect(validarCorreo2.tieneCaracterEspecial('pabaal13@gmail.com')).toBe(false);
});

test('correo con carácter especial pabaal!13@gmail.com - true', () => {
  expect(validarCorreo2.tieneCaracterEspecial('pabaal!13@gmail.com')).toBe(true);
});