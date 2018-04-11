import { User } from '../models/user.model';

export class Campaign {
  id: string;
  title: string;
  image: string;
  target: Number;
  amountRaised?: Number;
  isAchieved?: boolean;
  isAlmostAchieved?: boolean;
  isCompleted?: boolean;
  paymentInfo?: Array<string>;
  abstract: string;
  description: string;
  location: string;
  dueDate: Date;
  categories: Array<string>;
  paymentTokens?: Array<string>;
  creator: User;
  backers?: Array<User>;
  followers?: Array<User>;
}
