import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.model';
import { ActivatedRoute } from '@angular/router';
import {}
import { CampaignsService } from '../../../shared/services/campaign.service';

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  campaign: Campaign;

  constructor(
    private routes: ActivatedRoute,
    private campaignsService: CampaignsService
  ) { }

  ngOnInit() {
    this.routes
    .params
    .subscribe(params => this.campaign = this.campaignsService.getCampaign(params['id']));
  }

}
