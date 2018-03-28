import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopulationService } from './../population.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-aliens',
  templateUrl: './search-aliens.component.html',
  styleUrls: ['./search-aliens.component.css']
})
export class SearchAliensComponent implements OnInit {

  private searchField: FormControl;

  @Output() search: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe();     
  }

  onSearch(value: string) {
    this.search.emit(value);
  }

}
