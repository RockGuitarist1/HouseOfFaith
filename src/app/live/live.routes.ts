import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveComponent } from './live.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
