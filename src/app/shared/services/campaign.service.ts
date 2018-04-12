import { Campaign } from '../models/campaign.model';
import { Injectable } from '@angular/core';
import { campaigns } from '../data/campaigns.data';


@Injectable()
export class CampaignsService {
  campaigns: Array <Campaign> = campaigns;
  constructor() { }

  listCampaigns(): Array<Campaign> {
   return campaigns;
  }

  getCampaign(id: string): Campaign {
    console.log(campaigns.find(campaign => campaign.id === id));
    return campaigns.find(campaign => campaign.id === id);
   }


}
