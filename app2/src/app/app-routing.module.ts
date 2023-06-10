import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsGuard } from './cats.guard';
import { HomeComponent } from './home/home.component';
import { MiceGuard } from './mice.guard';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dogs', loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule) },
  { path: 'cats', loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule), canActivate: [CatsGuard] },
  { path: 'mice', loadChildren: () => import('./mice/mice.module').then(m => m.MiceModule) },
  { path: '**', redirectTo: 'home' } // Redirect to default page if URL does not exist
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
