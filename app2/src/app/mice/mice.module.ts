import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiceComponent } from './mice.component';

@NgModule({
  declarations: [MiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MiceComponent }
    ])
  ]
})
export class MiceModule { }
