import { Component } from '@angular/core';
import { Alien } from './model/alient';
import { PopulationService } from './population.service';
import { AlienFilter } from './alien-filter/alien-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gnome - Aliens App';

  aliens: Alien[];
  weights: number[];
  heights: number[];
  hairs: string[];

  search: string;
  alienFilter: AlienFilter;

  constructor(private populationService: PopulationService) {

  }
  
  ngOnInit() {
    this.alienFilter = new AlienFilter();
  }

  onSearch(value: string){
    this.search = value;
    this.applyFiltersAndSearch(this.search, this.alienFilter);
  }

  onFilter(value: AlienFilter) {
    this.alienFilter = value;
    this.applyFiltersAndSearch(this.search, this.alienFilter);
  }

  applyFiltersAndSearch(search: string, alienFilter: AlienFilter) {
    this.populationService.Search(search, alienFilter).subscribe(population => {
      this.aliens = population;
      this.weights = this.populationService.Weights;
      this.heights = this.populationService.Heights;
      this.hairs = this.populationService.Hairs;
    });
  }
}
