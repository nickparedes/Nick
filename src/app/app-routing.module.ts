import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/layout/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    loadChildren: () => import('./modules/layout/home.module').then(m => m.HomeModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
