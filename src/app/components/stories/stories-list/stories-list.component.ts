import { Component, OnInit } from '@angular/core';
import { StoriesService } from './../../../shared/services/stories.service';
import { Story } from './../../../shared/models/story.model';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {
  stories: Array<Story> = [];
  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
      this.stories = this.storiesService.getStories();
  }
}
