import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  // test('Debe mostrar el mensaje "Hola, soy Juan"', () => {
  //   const saludo = 'Hola, soy Juan';
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test('Debe mostar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, soy Juank';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe entregar el subtitulo enviado por props', () => {
    const saludo = 'Hola soy Goku';
    const subtitulo = 'Hola soy un subtitulo';

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
