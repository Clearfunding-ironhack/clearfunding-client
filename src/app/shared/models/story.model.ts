import { User } from '../models/user.model';

export class Story {
  id?: string;
  header: string;
  subheader?: string;
  abstract?: string;
  type?: string;
  categories?: Array<string>;
  image?: string;
  likes?: Array<User>;
  createdAt?: string;
}
