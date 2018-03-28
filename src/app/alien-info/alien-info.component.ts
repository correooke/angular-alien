import { Component, OnInit, Input } from '@angular/core';
import { Alien } from './../model/alient';
import { PopulationService } from './../population.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alien-info',
  templateUrl: './alien-info.component.html',
  styleUrls: ['./alien-info.component.css']
})
export class AlienInfoComponent implements OnInit {

  @Input() alien: Alien = new Alien();
  
  constructor(private populationService: PopulationService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.DisplayRoute();
    this.router.events
    .subscribe((event) => {
      this.DisplayRoute();
    });   

  }

  DisplayRoute() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log("id" + id)
      this.populationService.GetAlien(id).subscribe(aliens => {
        debugger;
        this.alien = aliens[0];
      });
    }    
  }

}
