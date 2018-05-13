import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoriesService } from './shared/services/stories.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { CampaignService } from './shared/services/campaign.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CampaignItemComponent } from './components/campaign/campaign-item/campaign-item.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoriesListComponent } from './components/stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './components/stories/stories-item/stories-item.component';
import './rxjs.operators';
import { LoginComponent } from './components/misc/login/login.component';
import { UsersService } from './shared/services/users.service';
import { InterestsService } from './shared/services/interests.service';
import { SessionService } from './shared/services/session.service';
import { ForgotPasswordComponent } from './components/misc/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/misc/reset-password/reset-password.component';
import { ProfileComponent } from './components/misc/profile/profile.component';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { PaymentService } from './shared/services/payment.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './components/misc/notifications/notifications.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/misc/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NavbarComponent,
    CampaignItemComponent,
    SignupComponent,
    StoriesListComponent,
    StoriesItemComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    FilterPipe,
    HomeComponent,
    NotificationsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    ChartsModule

  ],
  providers: [
    CampaignService,
    StoriesService,
    UsersService,
    InterestsService,
    SessionService,
    PaymentService,
    IsAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
