const saludar2 = ( nombre ) => {
  return `Hola ${ nombre }`;
} 


const saludar3 = ( nombre ) => `Hola ${ nombre }`; 
const saludar4 = () => `Hola mundo`; 

export const getUser = () => (
  {
    uid: 'ABC123',
    username: 'El_Pepe',
  }
);

export const getUsuarioActivo = ( nombre ) => (
  {
    uid: 'ABC1567',
    username: nombre,
  }
);