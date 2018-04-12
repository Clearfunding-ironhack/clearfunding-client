import { Story } from './../../../shared/models/story.model';
import { StoriesService } from './../../../shared/services/stories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Array<Story> = [];

  constructor(
    private router: Router,
    private storiesService: StoriesService) {}

  ngOnInit() {
    this.stories = this.storiesService.getStories();
  }
}
