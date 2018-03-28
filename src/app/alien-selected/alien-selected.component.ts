import { Component, OnInit, Input } from '@angular/core';
import { Alien } from './../model/alient';

@Component({
  selector: 'app-alien-selected',
  templateUrl: './alien-selected.component.html',
  styleUrls: ['./alien-selected.component.css']
})
export class AlienSelectedComponent implements OnInit {

  @Input() alien: Alien = new Alien();

  constructor() { }

  ngOnInit() {
  }

}
