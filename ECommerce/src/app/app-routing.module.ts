import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  // { path: 'observable', component: ObservableComponent},
  // { path: 'login', component: LoginComponent },
  // { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
