import { getImage } from '../../bases/11-async-await';

describe('Pruebas con async-await y fetch', () => {
  test('Debe retornar el url de la imagen', async () => {
    const url = await getImage();
    expect(url.includes('https://')).toBe(true);
  });
});
