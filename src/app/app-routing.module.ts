import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WlcGuard } from './Appservice/auth/wlc-guard.guard';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: SignupComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent,
    canActivate: [WlcGuard]
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
