import { Injectable } from '@angular/core';
import {Personne} from '../../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] ;

  constructor() {
    this.personnes =  [
      new Personne(0 , 'james' , 'kobe' , 'Assistant' , 'rotating_card_profile2.png' , 34 , 67527367 ) ,
      new Personne(1 , 'Elon' , 'Musk' , 'Developer' , 'elon.jpeg' , 44 , 5655456 ) ,
      new Personne(2 , 'Default' , 'Image' , 'Photographer' , '' , 54 , 786489 ) ,
    ] ;
  }

  getPersonnes(): Personne[] {
    return this.personnes ;
  }

  getPersonneById(id: number): Personne {
    const personne = this.personnes.find(personne => {
        return personne.id == id ;
    }) ;
    return personne ;
  }

  addPersonne(personne: Personne): void {
     personne.id = this.personnes[this.personnes.length - 1].id + 1 ;
     this.personnes.push(personne) ;
  }
  
}
