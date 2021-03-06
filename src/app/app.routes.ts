import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { Routes } from '@angular/router';
import { CampaignItemComponent } from './components/campaign/campaign-item/campaign-item.component';
import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { StoriesListComponent } from './components/stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './components/stories/stories-item/stories-item.component';
import { ForgotPasswordComponent } from './components/misc/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/misc/reset-password/reset-password.component';
import { ProfileComponent } from './components/misc/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
const PROVIDER = 'localhost:4200';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/forgot', component: ForgotPasswordComponent},
  { path: 'sessions/reset/:token', component: ResetPasswordComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'campaigns', component: CampaignListComponent},
  { path: 'campaigns/:id', component: CampaignItemComponent},
  { path: 'stories', component: StoriesListComponent },
  { path: 'stories/:id', component: StoriesItemComponent },
  { path: 'profile', canActivate: [IsAuthenticatedGuard], component: ProfileComponent}
];
