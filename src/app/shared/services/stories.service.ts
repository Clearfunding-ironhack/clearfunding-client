import { Story } from './../models/story.model';
import { stories } from './../data/stories.data';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';


@Injectable()
export class StoriesService {
  private stories: Array<Story> = stories;

  getStories(): Array<Story> {
    return this.stories;
  }

  getStory(id: string): Story {
    return this.stories.find(story => story.id === id);
  }
}
