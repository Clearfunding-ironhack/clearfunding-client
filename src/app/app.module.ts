import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { CampaignsService } from './shared/services/campaign.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CampaignItemComponent } from './components/campaign/campaign-item/campaign-item.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NavbarComponent,
    CampaignItemComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    CampaignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
