import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './home/home.module#HomePageModule' },
  { path: 'firstStart', loadChildren: './first-start/first-start.module#FirstStartPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login-register', loadChildren: './login-register/login-register.module#LoginRegisterPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
