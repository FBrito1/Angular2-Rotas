import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'AngularJs' },
      { id: 2, nome: 'Ionic' }  
    ];
  }

  getCurso(id: Number) {
    let cursos = this.getCursos();
    for( let i=0; i<cursos.length; i++ ) {
      let curso = cursos[i];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }

}
