import { Component, OnInit } from '@angular/core';
import {PremierService} from '../premier.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  color = 'red' ;

  constructor(private premierService: PremierService ,
              private router: Router ,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params) => {
        this.color = params.default ;
      }
    ) ;
  }

  // changeColor(input) {
  //     console.log(input.value) ;
  //
  //     this.color = input.value ;
  //
  //     input.value = '' ;
  //
  // }

  RequestData(wish: any) {
    alert(wish) ;
  }

  loggerMesData(){
    this.premierService.logger('test') ;
  }

  GoToCv() {
      this.router.navigate(['cv']) ;
  }

}
