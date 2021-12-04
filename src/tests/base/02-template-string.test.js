import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar hola Juan', () => {
    const nombre = 'Juan';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  });

  test('getSaludo debe retornar Hola Carlos si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
  });
});
