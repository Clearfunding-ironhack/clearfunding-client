import { CampaignListComponent } from './components/campaign/campaign-list/campaign-list.component';
import { Routes } from '@angular/router';
import { CampaignItemComponent } from './components/campaign/campaign-item/campaign-item.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { StoriesListComponent } from './components/stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './components/stories/stories-item/stories-item.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'campaigns', component: CampaignListComponent},
  { path: 'campaigns/:id', component: CampaignItemComponent},
  { path: 'stories', component: StoriesListComponent },
  { path: 'stories/:id', component: StoriesItemComponent }
];