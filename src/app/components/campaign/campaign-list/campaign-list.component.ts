import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../../shared/services/campaign.service';
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
    private campaignsService: CampaignService
  ) { }

  ngOnInit() {
    this.campaignsService.listCampaigns()
    // tslint:disable-next-line:no-shadowed-variable
    .subscribe( campaigns => this.campaigns = campaigns);
  }

  onClickCard(id: number) {
    this.router.navigate(['/campaigns', id]);
  }
}
