
// describe('Pruebas de Strings');// agrupa las pruebas
// it('Debe de regresar un string');// prueba en especifico

import { mensaje } from "./string";


describe('Pruebas de strings', () => {

  it( 'Debe de regresar un string', () => {

    const resp = mensaje('Fernando');

    expect( typeof resp).toBe('string');// valida que sea tipo string

  });

  it( 'Debe de retornar un saludo con el nombre enviado', () => {

    const nombre = 'Juan';
    const resp = mensaje(nombre);

    expect( resp).toContain(nombre);// valida que contenga el valor

  });

});





