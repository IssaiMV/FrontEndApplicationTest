import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/list-to-do/list-to-do.module').then(module => module.ListToDoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(module => module.AuthModule)
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule)
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
