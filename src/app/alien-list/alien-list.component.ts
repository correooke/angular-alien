import { Component, OnInit, Input } from '@angular/core';
import { Alien } from './../model/alient';
import { PopulationService } from './../population.service';

@Component({
  selector: 'app-alien-list',
  templateUrl: './alien-list.component.html',
  styleUrls: ['./alien-list.component.css']
})
export class AlienListComponent implements OnInit {

  @Input()
  aliens: Alien[];

  constructor() {
    
  }

  ngOnInit() {
    this.aliens = new Array<Alien>(); 
  }

}
