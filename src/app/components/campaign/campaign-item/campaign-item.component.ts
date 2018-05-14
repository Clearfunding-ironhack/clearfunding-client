import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('clock') clockElement: ElementRef;
  @ViewChild('days') daysElement: ElementRef;
  @ViewChild('hours') hoursElement: ElementRef;
  @ViewChild('minutes') minutesElement: ElementRef;
  @ViewChild('seconds') secondsElement: ElementRef;

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
            this.countdown(this.campaign.dueDate, this.clockElement.nativeElement, 'End of campaign');
            });
      });
  }
  getRemainingTime = deadline => {
    const now = +new Date(),
        remainingTime = (+new Date(deadline) - now + 1000) / 1000,
        remainingSeconds = ('0' + Math.floor(remainingTime % 60)).slice(-2),
        remainingMinutes = ('0' + Math.floor(remainingTime / 60 % 60)).slice(-2),
        remainingHours = ('0' + Math.floor(remainingTime / 3600 % 24)).slice(-2),
        remainingDays = Math.floor(remainingTime/ (3600 * 24));
        return {
          remainingTime,
          remainingSeconds,
          remainingMinutes,
          remainingHours,
          remainingDays
        };
  }

  countdown = (deadline, element, finalMessage) => {
    const clock = this.clockElement.nativeElement;
    const days = this.daysElement.nativeElement;
    const hours = this.hoursElement.nativeElement;
    const minutes = this.minutesElement.nativeElement;
    const seconds = this.secondsElement.nativeElement;
    const timerUpdate = setInterval(() => {
    const time = this.getRemainingTime(deadline);
      days.innerHTML = `${time.remainingDays}`;
      hours.innerHTML = `${time.remainingHours}`;
      minutes.innerHTML = `${time.remainingMinutes}`;
      seconds.innerHTML = `${time.remainingSeconds}`;
      if (time.remainingTime <= 1) {
        clearInterval(timerUpdate);
        clock.innerHTML = finalMessage;
      }
    }, 1000)
    
  };


  drawChart() {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          const ctx = chart.chart.ctx;
          const centerConfig = chart.config.options.elements.center;
          const fontStyle = centerConfig.fontStyle || 'Arial';
          const txt = centerConfig.text;
          const color = centerConfig.color || '#000';
          const sidePadding = centerConfig.sidePadding || 20;
          const sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
          ctx.font = "30px " + fontStyle;
          const stringWidth = ctx.measureText(txt).width;
          const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
          const widthRatio = elementWidth / stringWidth;
          const newFontSize = Math.floor(30 * widthRatio);
          const elementHeight = (chart.innerRadius * 2);
          const fontSizeToUse = Math.min(newFontSize, elementHeight);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse+"px " + fontStyle;
          ctx.fillStyle = color;
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
            backgroundColor: ["#E8C3FD", "#64A1FF"],
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
          color: '#36A2EB',
          fontStyle: 'Helvetica',
          sidePadding: 15
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
