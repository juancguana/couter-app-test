import { getHeroeById } from './08-imp-exp'

export const gatHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const heroe = getHeroeById(id);
      if (heroe){
      resolve( heroe );
      } else {
        reject('No se pudo encontrar al heroe')
      } 
    }, 1500)
  });
}

