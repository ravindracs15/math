import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './basic-ops/basic-ops.component';

const routes: Routes = [
  { path: '', component: AdditionComponent}, 
  { path: 'addition', component: AdditionComponent },
  { path: 'subtraction', component: AdditionComponent },
  { path: 'multiplication', component: AdditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
