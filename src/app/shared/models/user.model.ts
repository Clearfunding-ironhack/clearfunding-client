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
  campaignsFollowed?: Array <Campaign> = [];
  campaignsBacked?: Array <Campaign> = [];
  campaignsCreated?: Array <Campaign> = [];
  committedAmount?: Number;
  disbursedAmount?: Number;
  paymentTokens?: Array<string> = [];
  likedPublications?: Array<Story> = [];
  LatchId?: string;
  paired?: boolean;

  public asFormData(): FormData {
    const data = new FormData();
    data.append('username', this.username);
    data.append('email', this.email);
    data.append('password', this.password);

    for (let interest of this.interests) {
      data.append('interests', interest);
    }

    data.append('image', this.image);

    return data;

  }
}

