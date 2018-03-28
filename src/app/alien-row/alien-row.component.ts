import { Component, OnInit, Input } from '@angular/core';
import { Alien } from './../model/alient';


@Component({
  selector: 'app-alien-row',
  templateUrl: './alien-row.component.html',
  styleUrls: ['./alien-row.component.css']
})
export class AlienRowComponent implements OnInit {

  @Input() alien: Alien;

  constructor() { }

  ngOnInit() {

  }

}
