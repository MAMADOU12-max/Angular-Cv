import { Component, OnInit } from '@angular/core';
import {CvService} from '../cv.service';
import {ActivatedRoute} from '@angular/router';
import {Personne} from '../../../models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  personne: Personne ;

  constructor(private cvService: CvService ,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
            this.personne  =  this.cvService.getPersonneById(params.id) ;
      }
    ) ;
  }

}
