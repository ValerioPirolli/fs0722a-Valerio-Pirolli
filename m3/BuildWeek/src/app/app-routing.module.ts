import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';


const routes: Routes = [
  {
    path:"films",
    component:FilmsComponent
    /*,
    canActivate:[AuthGuardGuard]
    */
  },
  {
    path:"",
    component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
