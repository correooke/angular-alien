import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlienInfoComponent } from './alien-info/alien-info.component';
import { PopulationService } from './population.service';
import { AlienListComponent } from './alien-list/alien-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlienRowComponent } from './alien-row/alien-row.component';
import { SearchAliensComponent } from './search-aliens/search-aliens.component';
import { AlienFilterComponent } from './alien-filter/alien-filter.component';
import { AlienSelectedComponent } from './alien-selected/alien-selected.component';


@NgModule({
  declarations: [
    AppComponent,
    AlienInfoComponent,
    AlienListComponent,
    AlienRowComponent,
    SearchAliensComponent,
    AlienFilterComponent,
    AlienSelectedComponent
  ],
  imports: [
  RouterModule,
  BrowserModule,
  HttpModule,
  AppRoutingModule,  
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatListModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  ],
  providers: [PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
