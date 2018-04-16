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
import { FilterPipe } from './filter.pipe';

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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    CampaignService,
    StoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
