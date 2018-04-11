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

  constructor() { }

  ngOnInit() {
  }

}


// export class MovieItemComponent implements OnInit {
//   movie: Movie

//   constructor(
//     private routes: ActivatedRoute,
//     private moviesService: MoviesService) {}

//   ngOnInit() {
//     this.routes
//       .params
//       .subscribe(params => this.movie = this.moviesService.getMovie(Number(params['id'])));
//   }

// }