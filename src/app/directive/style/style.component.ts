import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  @Input() color = 'red' ;
  @Input() bgColor = 'brown' ;
  size  = '84px' ;

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size)  {
    this.size = size + 'px' ;
    console.log(this.size) ;
  }

}
