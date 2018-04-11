import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { CampaignsService } from './shared/services/campaign.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CampaignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
