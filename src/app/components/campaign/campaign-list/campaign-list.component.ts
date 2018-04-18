import { InterestsService } from './../../../shared/services/interests.service';
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
  
  categories: Array <string> = [];

  constructor(
    private router: Router,
    private campaignsService: CampaignService,
    private interestsService: InterestsService
  ) { }


  ngOnInit() {
    this.categories = this.interestsService.getInterests();
    console.log(this.categories);
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
  });
}

  onClickCard(id: number) {
    this.router.navigate(['/campaigns', id]);
  }

  onFilterCategory(event){
    const selectedCategory = event.target.id;
    console.log(selectedCategory)
    }
}
