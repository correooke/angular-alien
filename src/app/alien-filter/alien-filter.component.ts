import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlienFilter } from './alien-filter';

@Component({
  selector: 'app-alien-filter',
  templateUrl: './alien-filter.component.html',
  styleUrls: ['./alien-filter.component.css']
})
export class AlienFilterComponent implements OnInit {

  @Input() weights: number[];
  @Input() heights: number[];
  @Input() hairs: string[];

  alienFilter: AlienFilter;

  @Output()  filter: EventEmitter<AlienFilter> = new EventEmitter<AlienFilter>();

  constructor() { }

  ngOnInit() {
    this.alienFilter = new AlienFilter();
  }

  onCheckWeight(value: number) {
    const nValue = Number(value);
    this.alienFilter.Weights.includes(nValue) ? 
      this.alienFilter.Weights = this.alienFilter.Weights.filter(item => item !== nValue) : 
      this.alienFilter.Weights.push(nValue);

    this.filter.emit(this.alienFilter);
  }
  onCheckHeight(value: number) {
    const nValue = Number(value);
    this.alienFilter.Heights.includes(nValue) ? 
      this.alienFilter.Heights = this.alienFilter.Heights.filter(item => item !== nValue) : 
      this.alienFilter.Heights.push(nValue);

    this.filter.emit(this.alienFilter);
  }
  onCheckHair(value: string) {
    this.alienFilter.Hairs.includes(value) ? 
      this.alienFilter.Hairs = this.alienFilter.Hairs.filter(item => item !== value) : 
      this.alienFilter.Hairs.push(value);

      this.filter.emit(this.alienFilter);
  }
  onOpen() {
    this.filter.emit(this.alienFilter);
  }
}
