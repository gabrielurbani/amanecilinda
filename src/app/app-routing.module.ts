import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HojaComponent } from './components/hoja/hoja.component';
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'hoja', component: HojaComponent},
  {path:'**', redirectTo: 'home',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
