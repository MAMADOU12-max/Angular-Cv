import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  @Input() filsproperty ;

  @Output() sendDataRequest = new EventEmitter() ;


  constructor() { }

  ngOnInit(): void {
    console.log(this.filsproperty) ;
  }

  calledMethodChild() {
    this.sendDataRequest.emit(
      `can i have some money father :)`
    ) ;
  }
}
