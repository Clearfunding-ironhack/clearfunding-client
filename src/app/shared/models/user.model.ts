import { Campaign } from '../models/campaign.model';
import { Story } from '../models/story.model';

export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  resetPasswordToken?: String;
  resetPasswordExpires?: Date;
  image?: string;
  interests?: Array<string>;
  PayerID?: string;
  DNI?: string;
  campaignsFollowed?: Array <Campaign>;
  campaignsBacked?: Array <Campaign>;
  campaignsCreated?: Array <Campaign>;
  committedAmount?: Number;
  disbursedAmount?: Number;
  paymentTokens?: Array<string>;
  likedPublications?: Array<Story>;
}
