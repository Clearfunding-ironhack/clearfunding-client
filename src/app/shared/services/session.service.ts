import { BaseApiService } from './base-api.service';
import { User } from './../../shared/models/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class SessionService extends BaseApiService {
  private static readonly SESSION_API = `${BaseApiService.BASE_API}/sessions`;

  private user: User;
  private userSubject: Subject<User> = new Subject();

  constructor(private http: Http) {
    super();
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.notifyUserChanges();
  }
