import { Component, OnInit } from '@angular/core';
import {Personne} from '../../../models/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  personnes: Personne[] ;
  cvselected: Personne ;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes() ;

  }

  cvSelected(personne) {

    this.cvselected = personne ;
  }
}

