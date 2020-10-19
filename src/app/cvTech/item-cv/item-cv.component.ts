import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../../models/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {

  @Input() itempersonne: Personne ;

  @Output() selectedPersonne = new EventEmitter() ;

  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne() {

    this.selectedPersonne.emit(
        this.itempersonne
      ) ;
  }
}
