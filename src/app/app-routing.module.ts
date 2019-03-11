import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';

const routes: Routes = [
  { path: '', component: TarjetasComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
