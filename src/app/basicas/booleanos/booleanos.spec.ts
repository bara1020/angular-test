import { usuarioIngresado } from "./booleanos"

describe('Pruebas de booleanos', () =>{

  it('Bebe retornar true', () =>{
    const res = usuarioIngresado();

    expect(res).toBeTruthy();
  })

})
