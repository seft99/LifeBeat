import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { DatasetComponent } from './components/dataset/dataset.component';
import { CreditosComponent } from './components/creditos/creditos.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {path: 'informacion',component: InformacionComponent},
  {path: 'mainpage',component: MainpageComponent},
  {path: 'dataset',component: DatasetComponent},
  {path: 'creditos',component: CreditosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
