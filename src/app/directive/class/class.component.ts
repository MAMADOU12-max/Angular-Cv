import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  teams = [
    'nigeria' ,
    'sud africa' ,
    'rwanda' ,
    'mali'
  ] ;
  active = false ;
  desactive = true ;
  suspens = false ;

  constructor() { }

  ngOnInit(): void {
  }

  changeFont() {
   this.active = !this.active ;
   this.desactive = !this.desactive ;
  }

}
