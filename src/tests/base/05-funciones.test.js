import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Pepe',
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const nombre = 'Juan';
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual({
      uid: 'ABC1567',
      username: nombre,
    });
  });
});
