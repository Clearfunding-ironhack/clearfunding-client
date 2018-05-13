import { Component, OnInit, OnDestroy } from '@angular/core';
// import * as $ from 'jquery';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/models/user.model';
// import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;

  constructor(
    private sessionService: SessionService,
    private routes: ActivatedRoute,
    // private usersService: UsersService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.userSubscription = this.sessionService.onUserChanges()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  submitLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

}
