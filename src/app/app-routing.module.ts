import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail/poke-detail.component';

const routes: Routes = [
  { path: '', component: PokeListComponent },
  // { path: '/{id}', component: PokeDetailComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
