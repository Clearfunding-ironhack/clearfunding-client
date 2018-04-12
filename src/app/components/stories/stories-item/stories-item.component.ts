import { Component, OnInit } from '@angular/core';
import { StoriesService } from './../../../shared/services/stories.service';
import { Story } from './../../../shared/models/story.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css']
})
export class StoriesItemComponent implements OnInit {
  story: Story;

  constructor(
    private routes: ActivatedRoute,
    private moviesService: StoriesService
  ) { }

  ngOnInit() {
        this.routes
          .params
          .subscribe(params => this.story = this.moviesService.getStory(String(params['id'])));
      }
}
