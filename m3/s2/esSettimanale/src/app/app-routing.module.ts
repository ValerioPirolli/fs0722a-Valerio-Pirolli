import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './components/completati/completati.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path:'completed',
    component: CompletatiComponent
  },
  {
    path:'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
