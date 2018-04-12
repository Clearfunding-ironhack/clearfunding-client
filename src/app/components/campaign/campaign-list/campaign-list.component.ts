import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../../../shared/services/campaign.service';
import { campaigns } from '../../../shared/data/campaigns.data';
import { Campaign } from '../../../shared/models/campaign.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: Array <Campaign> = [];


  constructor(
    private router: Router,
    private campaignsService: CampaignsService
  ) { }

  ngOnInit() {
    this.campaigns = this.campaignsService.listCampaigns();
  }

}
