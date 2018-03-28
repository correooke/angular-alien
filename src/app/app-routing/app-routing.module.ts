import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlienSelectedComponent } from './../alien-selected/alien-selected.component';

const routes: Routes = [
  { path: 'aliens/:id', component: AlienSelectedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
