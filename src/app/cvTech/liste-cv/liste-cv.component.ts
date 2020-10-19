import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../../models/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {

  @Input() personnnesListe: Personne;

  @Output() selectedpersonne = new EventEmitter() ;

  constructor() { }

  ngOnInit(): void {}

  userChoose(selectedpersonne) {
    this.selectedpersonne.emit(
      selectedpersonne
    ) ;
  }

}
