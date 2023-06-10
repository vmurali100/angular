import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatsComponent } from './cats.component';

@NgModule({
  declarations: [CatsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CatsComponent }
    ])
  ]
})
export class CatsModule { }
