import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';

const routes: Routes = [
  {path:'heroes', component: HeroesComponent},
  {path:'heroes-details:heroID', component: HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
