import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CampaignService } from '../../../shared/services/campaign.service';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../../../shared/services/payment.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {
  campaign: Campaign = new Campaign();
  error: string;
  inputPaymentOpened: boolean = false;
  chart: any;
  

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private campaignsService: CampaignService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe(
       (params: Params) => {
         this.campaignsService.getCampaign(params['id'])
          .subscribe(campaign => {
            this.campaign = campaign;
            this.drawChart();
            });
      });
  }

  drawChart() {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          let ctx = chart.chart.ctx;
    
          //Get options from the center object in options
          let centerConfig = chart.config.options.elements.center;
          let fontStyle = centerConfig.fontStyle || 'Arial';
          let txt = centerConfig.text;
          let color = centerConfig.color || '#000';
          let sidePadding = centerConfig.sidePadding || 20;
          let sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
          //Start with a base font of 30px
          ctx.font = "30px " + fontStyle;
    
          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          let stringWidth = ctx.measureText(txt).width;
          let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
    
          // Find out how much the font can grow in width.
          let widthRatio = elementWidth / stringWidth;
          let newFontSize = Math.floor(30 * widthRatio);
          let elementHeight = (chart.innerRadius * 2);
    
          // Pick a new font size so it will not be larger than the height of label.
          let fontSizeToUse = Math.min(newFontSize, elementHeight);
    
          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          let centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse+"px " + fontStyle;
          ctx.fillStyle = color;
          //Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      }
    });

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ["Amount Raised","Target"],
        datasets: [
          {
            // label: "Amount Raised (USD)",
            backgroundColor: ["#BA9FF6", "#82E8F0"],
            data: [this.campaign.amountRaised, this.campaign.target]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Amount Raised'
        },
        elements: {
          center: {
          text: `${this.campaign.percentageAchieved} %`,
          color: '#36A2EB', //Default black
          fontStyle: 'Helvetica', //Default Arial
          sidePadding: 15 //Default 20 (as a percentage)
        }
      }
      }
  });
  }

  makePayment(id: string, form: NgForm) {
    const campaignId = id;
    const amount = form.value.amount;
    this.paymentService.makePayment(campaignId, amount).subscribe(
      (paypalLink) => {
        form.reset();
        location.replace(paypalLink);
      },
      (error) => {
        if (error.status === 403) {
          this.router.navigate(['/login']);
        }
      }
    );

  }

  toggleVisibilityInputPayment() {
    this.inputPaymentOpened = !this.inputPaymentOpened;
  }

  followCampaign(id: string) {
    console.log('it works');
    this.campaignsService.followCampaign(id)
      .subscribe(
        (data) => {
        console.log(data);
        },
        (error) => {
          this.error = error.message;
        }
      );
  }


}
