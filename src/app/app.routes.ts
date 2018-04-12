import { StoriesListComponent } from './components/stories/stories-list/stories-list.component';
import { StoriesItemComponent } from './components/stories/stories-item/stories-item.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'stories', component: StoriesListComponent },
    { path: 'stories/:id', component: StoriesItemComponent }
];
