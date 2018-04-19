import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';



@Injectable()
export class PaymentService {


  constructor() { }

  makePayment(campaignId, amount){
    return this.http.post(`${PaymentService.SESSION_API}/forgot`, { email: email }, BaseApiService.defaultOptions)
    .catch(error => console.log(error));
  }

}