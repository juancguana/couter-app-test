import { gatHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  test('gatHeroeByIdAsync debe retornar un heroe async', (done) => {
    const id = 1;
    gatHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('debe de obtener un error su el heroe no existe', (done) => {
    const id = 10;

    gatHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar al heroe');
      done();
    });
  });
});
