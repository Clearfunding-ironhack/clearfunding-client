import { campaigns } from './../../../shared/data/campaigns.data';
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
    .subscribe( campaigns => {
      this.campaigns = campaigns;
      this.campaigns = this.campaigns.map((campaign) => {
        if (campaign.target) {
        const raisedNumber = (campaign.amountRaised * 100 / campaign.target);
        const raisedRounded = raisedNumber.toFixed(0);
        campaign.percentageRaised = raisedRounded + '%';
        }
        if (campaign.backers.length >= 1) {
         campaign.backersNumber = campaign.backers.length;
        }
        return campaign;
      });
      console.log(this.campaigns);
      const categories = [
        'Science',
        'Politics',
        'Charity',
        'Environment',
        'LGTB',
        'Animals',
        'Nationalisms',
        'Art',
        'Technology'
      ];
      console.log(categories);
  });
}

  onClickCard(id: number) {
    this.router.navigate(['/campaigns', id]);
  }
}
