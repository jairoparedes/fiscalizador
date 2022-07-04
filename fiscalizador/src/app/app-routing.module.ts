import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FiscalizadorComponent } from './pages/fiscalizador/fiscalizador.component';

const routes: Routes = [{
  path:'',
  component: FiscalizadorComponent,
  canActivate: [AuthGuard],
},
{
  path:'fiscalizador',
  component: FiscalizadorComponent,
  canActivate: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
