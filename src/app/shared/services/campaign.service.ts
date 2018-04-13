import { Campaign } from '../models/campaign.model';
import { Injectable } from '@angular/core';
import { campaigns } from '../data/campaigns.data';
import { BaseApiService } from './base-api.service';
import { environment } from '../../environments/environment';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CampaignService extends BaseApiService {
  private static readonly CAMPAIGNS_API = `${BaseApiService.BASE_API}/campaigns`;

  constructor(private http: Http) {
    super();
  }

  listCampaigns(): Observable<Array<Campaign>> {
    return this.http.get(CampaignService.CAMPAIGNS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  getCampaign(id: string): Observable<Campaign> {
    return this.http.get(`${CampaignService.CAMPAIGNS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}


// @Injectable()
// export class CampaignsService {
//   campaigns: Array <Campaign> = campaigns;
//   constructor() { }

//   listCampaigns(): Array<Campaign> {
//    return campaigns;
//   }

//   getCampaign(id: string): Campaign {
//     console.log(campaigns.find(campaign => campaign.id === id));
//     return campaigns.find(campaign => campaign.id === id);
//    }


// }
