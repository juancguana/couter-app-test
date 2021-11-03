import { getHeroeById, getHeroeByOwner } from "../../bases/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
  
  test('debe de retornar un heroe por id', () => {
    
    const id = 2;

    const heroe = getHeroeById( id );

    const heroeData = heroes.find( h => h.id === id );

    expect( heroe ).toEqual( heroeData );

  })
  

  test('debe de retornar un undefind si heroe no existe', () => {
    
    const id = 10;

    const heroe = getHeroeById( id );

    expect( heroe ).toBe( undefined );

  })

  test('debe de retornar un arreglo con los heroes de DC', () => {
    
    const owner = 'DC';

    const heroes = getHeroeByOwner(owner)

    const heroesData = heroes.filter( h => h.owner === owner );

    expect( heroes ).toEqual( heroesData );

  })

  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    
    const owner = 'Marvel';

    const heroes = getHeroeByOwner(owner)

    expect( heroes.length ).toBe( 2 );

  })

})
