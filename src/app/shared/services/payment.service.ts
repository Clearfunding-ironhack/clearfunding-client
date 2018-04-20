import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class PaymentService extends BaseApiService {

  private static readonly PAYMENT_API = `${BaseApiService.BASE_API}/donations`;


  constructor(
    private http: Http,
    private router: Router,
    private routes: ActivatedRoute,
  ) {
    super();
   }

  makePayment(campaignId, amount) {
    return this.http.post(`${PaymentService.PAYMENT_API}/${campaignId}/pay`, 
    { name: 'payment', price: amount, currency: 'USD'},
    BaseApiService.defaultOptions)
    .map(res => {
     return res.json().paypalLink;
    })
    // .catch(err => console.log(err));
  }
  executePayment() {
    //const paymentToken = this.routes.snapshot.params['token'];
    // http:localhost:4200/campaigns?paymentId=PAY-87918546MT4757058LLM4SWY&token=EC-01995989V2712292Y&PayerID=FCBJ9SQT67H9S
    //  return this.http.post(`${PaymentService.PAYMENT_API}/success/`,
    // { paymentToken: ; }

  }


} 

