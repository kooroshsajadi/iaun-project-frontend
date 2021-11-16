import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { PanelComponent } from './components/panel/panel.component';
import { AuthGuardService } from './services/auth-guard.service'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuardService]}
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
