// const getImagesPromesa = () => new Promise( resolve => resolve('https://fadffsadfa'));
// getImagesPromesa().then( console.log );

const getImage = async () => {

    try {
        const apiKey = 'W61XaNXLmlSYZ2bN50dtgHiOklben61Q';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original; 
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
      // manejo del error
      console.error(error);
    }

}

getImage();




// peticion
// .then( resp => resp.json() )
// .then( ({ data }) => {
//   const { url } = data.images.original; 
//   const img = document.createElement('img');
//   img.src = url;
//   document.body.append( img );
// })
// .catch( console.warn );