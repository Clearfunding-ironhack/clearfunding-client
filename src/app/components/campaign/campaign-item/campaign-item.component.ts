import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from '../../../shared/services/campaign.service';



@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  campaign: Campaign = new Campaign();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private campaignsService: CampaignService
  ) { }

  ngOnInit() {

    console.log(this.routes.data)
    this.routes
    .data
    .subscribe(data => {
      console.log(data)
      this.campaign = data['campaign'];
      console.log(this.campaign);
    });
  }
}

