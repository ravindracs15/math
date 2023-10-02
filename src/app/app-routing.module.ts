import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './basic-ops/basic-ops.component';
import { Constants } from './constnants';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', component: AdditionComponent, data:{opType: Constants.ADD}}, 
  { path: Constants.ADD, component: AdditionComponent, data:{opType: Constants.ADD} },
  { path:  Constants.SUB, component: AdditionComponent , data:{opType: Constants.SUB}},
  { path:  Constants.MUL, component: AdditionComponent, data:{opType: Constants.MUL}},
  { path: Constants.TABLES, component: TablesComponent, data:{opType: Constants.MUL} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
