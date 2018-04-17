import { Injectable } from '@angular/core';
import { interests } from '../data/interests.data';


@Injectable()
export class InterestsService {
  interests: Array<string> = interests;

  constructor() { }

  getInterests(): Array<string> {
   return interests;
  }

}
