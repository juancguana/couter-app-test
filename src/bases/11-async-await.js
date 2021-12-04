export const getImage = async () => {
  try {
    const apiKey = '7kXiE445mSwfPQx34vwhbrAsB45TEO5Z';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No existe';
  }
};
