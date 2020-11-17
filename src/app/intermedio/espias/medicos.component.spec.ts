import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  xit('Init: Debe de cargar los medicos', () => {

    const medicos = ['Medico1', 'Medico2', 'Medico3'];

    componente.ngOnInit();
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return Observable.create([medicos]);
    });//cuando alguien llame a getMedicos


    expect(componente.medicos.length).toBeGreaterThan(0);

  });


  xit('Debe de llamar al servidor para agregar un medico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return Observable.empty();
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();

  });

  it('Debe de agregar un nuevo medico al arreglo de medicos', () => {

    const medico = { id: 1, nombre: 'Juan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(Observable.from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  })

  it('Si falla la adicion, la popiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';

    spyOn(servicio, 'agregarMedico').and.returnValue(observable.throw(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  })

  it('Debe de llamar al servidor para borrar un médico', () => {
    const espia = spyOn(servicio,'borrarMedico').and.returnValue(Observable.empty());

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  })


});
