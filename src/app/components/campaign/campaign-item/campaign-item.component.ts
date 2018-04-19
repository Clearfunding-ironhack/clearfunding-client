import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CampaignService } from '../../../shared/services/campaign.service';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../../../shared/services/payment.service';



@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  campaign: Campaign = new Campaign();
  error: Object;
  inputPaymentOpened: boolean = false;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private campaignsService: CampaignService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(
       (params: Params) => {
         this.campaignsService.getCampaign(params['id'])
         .subscribe(campaign => {
           console.log(`this is campaign ${campaign}`);
           this.campaign = campaign;
          });
      });
  }
  makePayment(id: string, form: NgForm) {
    const campaignId = id;
    const amount = form.value.amount;
    this.paymentService.makePayment(campaignId, amount).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );

  }

  toggleVisibilityInputPayment(){
    this.inputPaymentOpened = !this.inputPaymentOpened;
  }




}
