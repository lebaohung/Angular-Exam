import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./views/book-list/book-list.component";
import {BookFormComponent} from "./views/book-form/book-form.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'book-add',
    component: BookFormComponent
  },
  {
    path: 'book-edit/:id',
    component: BookFormComponent
  },
  {
    path: 'book-delete/:id',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
