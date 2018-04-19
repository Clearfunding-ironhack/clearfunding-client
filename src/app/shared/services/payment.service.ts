import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';



@Injectable()
export class PaymentService extends BaseApiService {

  private static readonly PAYMENT_API = `${BaseApiService.BASE_API}/donations`;


  constructor(private http: Http) {
    super()
   }

  makePayment(campaignId, amount){
    return this.http.post(`${PaymentService.PAYMENT_API}/${campaignId}/pay`, { name: "payment", price: amount, currency: "USD" }, BaseApiService.defaultOptions);
    // .catch(err => console.log(err));
  }

}