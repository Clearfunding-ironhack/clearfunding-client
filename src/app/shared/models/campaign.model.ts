import { User } from '../models/user.model';

export class Campaign {
  title: string;
  target: number;
  image?: string;
  id?: string;
  amountRaised?: number;
  // isAchieved?: boolean;
  // isAlmostAchieved?: boolean;
  // isCompleted?: boolean;
  // paymentInfo?: Array<string>;
  abstract?: string;
  description?: string;
  location?: string;
  dueDate?: Date;
  categories?: Array<string>;
  // paymentTokens?: Array<string>;
  creator?: User;
  // backers?: Array<User>;
  // followers?: Array<User>;
}
