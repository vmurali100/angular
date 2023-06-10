import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DogsComponent } from './dogs.component';

@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DogsComponent }
    ])
  ]
})
export class DogsModule { }
