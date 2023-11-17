const validarCorreo3 = require('./validarCorreo3')

test('correo válido longitud pabaal13@gmail.com - true', () => {
  expect(validarCorreo3.esCorreoValidoLongitud('pabaal13@gmail.com')).toBe(true)
});

test('correo inválido longitud a@b - false', () => {
  expect(validarCorreo3.esCorreoValidoLongitud('a@b')).toBe(false)
});

test('correo inválido longitud aabbccddeeffgghhiijj - false', () => {
  expect(validarCorreo3.esCorreoValidoLongitud('aabbccddeeffgghhiijj')).toBe(false)
});col
