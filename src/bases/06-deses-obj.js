const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: "Soldado"
}

// const { nombre, clave, edad } = persona;

// console.log( nombre);
// console.log( edad);
// console.log( clave);

const useContext = ( { clave, nombre, edad, rango = "Capitan" } ) => {
  
  // console.log( nombre, edad, rango  );
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: -12.312321,
      lng: 23.1212,
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext ( persona );

console.log(nombreClave, anios)
console.log(lat, lng)