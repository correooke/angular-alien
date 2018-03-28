import { Injectable } from '@angular/core';
import { Alien } from './model/alient';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import { AlienFilter } from './alien-filter/alien-filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


@Injectable()
export class PopulationService {

  constructor(private http: Http) {
    this.aliens = null;
  }

  private ApiResult;
  private aliens: Alien[];

  get Aliens(): Observable<Alien[]> {
    return Observable.of(this.aliens);
  };

  get Weights(): Array<number> {
    return this.aliens.reduce((acc, alien: Alien) => {
      const weirange = Math.floor(alien.weight / 5) * 5;
      if (!acc.includes(weirange)) {
        return [...acc, weirange];
      }
      return acc;
    }, []).sort((w1: number, w2: number) => (w1 > w2 ? 0:1));
  }

  get Heights(): Array<number> {
    return this.aliens.reduce((acc, alien: Alien) => {
      const h_range = Math.floor(alien.height / 5) * 5;
      if (!acc.includes(h_range)) {
        return [...acc, h_range];
      }
      return acc;
    }, []).sort((h1: number, h2: number) => (h1 > h2 ? 0:1));
  }  

  get Hairs(): Array<string> {
    return this.aliens.reduce((acc, alien: Alien) => {
      if (!acc.includes(alien.hair_color)) {
        return [...acc, alien.hair_color];
      }
      return acc;
    }, []).sort((h1: string, h2: string) => (h1 > h2 ? 0:1));
  }  

  isSelected(value: number, options: number[]) {
    return options.reduce((isTrue, option) => isTrue ? true : (value >= option && value < option + 5), false); 
  }

  GetAlien(id: number): Observable<Alien[]> {
    return this.Search('', new AlienFilter(), true).map(aliens => aliens.filter( alien => alien.id == id));
  }

  Search(value: string, filter: AlienFilter, all: boolean = false): Observable<Alien[]> {
    const url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
   
    console.log("Searching " + JSON.stringify(filter));
    if (this.aliens != null) {
      return Observable.of(this.Filter(value, filter, this.aliens, all));
    } else {
      return this.http.get(url).map(resp => {
        return resp.json().Brastlewark.map( alien => alien as Alien);
      }).do(aliens => {
          this.aliens = aliens.sort((a1,a2) => a1.name > a2.name);
          return this.aliens;
      }).map((arg: Alien[]) => {
          return this.Filter(value, filter, arg, all);

        }
      ); 
    }
    
  }

  Filter(value: string = '', filter: AlienFilter, aliens: Alien[], all: boolean = false): Alien[] {
    
    if (!all && value.trim() === '' &&
       filter.Hairs.length === 0 &&
      filter.Heights.length === 0 && 
    filter.Weights.length === 0) return new Array<Alien>();
    console.log("FILTRANDO");
    const valueToSearch = value.toLowerCase();
    return aliens.filter(
      alien => (
        alien.name.toLowerCase().includes(valueToSearch) && 
        (filter.Weights.length == 0 || this.isSelected(alien.weight, filter.Weights) &&
        (filter.Heights.length == 0 || this.isSelected(alien.height, filter.Heights) && 
        (filter.Hairs.length == 0 || filter.Hairs.includes(alien.hair_color))))
        
      ));
  }
}
