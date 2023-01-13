import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DettagliComponent } from './dettagli/dettagli.component';

const routes: Routes = [
  {
    path: 'active',
    component: ActiveComponent
  },
  {
    path: 'inactive',
    component: InactiveComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:':id',  //parematri dell'url (routing)
        component:UserCardComponent
      }
    ]
  },
  {
    path:"dettagli/:id",
    component:DettagliComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
