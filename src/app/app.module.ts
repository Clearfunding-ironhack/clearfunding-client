import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoriesService } from './shared/services/stories.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { StoriesListComponent } from './components/stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './components/stories/stories-item/stories-item.component';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NavbarComponent,
    StoriesListComponent,
    StoriesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
