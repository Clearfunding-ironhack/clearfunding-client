import { Campaign } from '../models/campaign.model';
import { Injectable } from '@angular/core';
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
  
  followCampaign(id:string): Observable<Campaign> {
    return this.http.put(`${CampaignService.CAMPAIGNS_API}/${id}/follow`, null, BaseApiService.defaultOptions)
      .map((res: Response) => res.json().message)
      .catch(error => this.handleError(error));
  }
}

