import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
