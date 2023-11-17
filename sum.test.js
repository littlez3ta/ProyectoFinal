const validarCorreo = require('./validarCorreo');

test('email pabaal13@gmail.com -', () => {
  expect(validarCorreo.isValidCorreo('pabaal13@gmail.com')).toBe(true);
});

test('correo 1 -> false', () => {
  expect(validarCorreo.isValidCorreo('1')).toBe(false);
});
