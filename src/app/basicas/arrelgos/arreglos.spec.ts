import { obtenerRobots } from './arreglos'

describe('Pruebas de arreglos', ()=> {

  it('Debe de retornar al menos 3 robots', ()=>{

    const res = obtenerRobots();

    expect(res.length).toBeGreaterThanOrEqual(3);

  })

  it('Debe existir Megaman y Ultron', ()=>{

    const res = obtenerRobots();

    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');

  })

})
