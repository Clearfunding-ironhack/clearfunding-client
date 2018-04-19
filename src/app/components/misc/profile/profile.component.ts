import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UsersService } from './../../../shared/services/users.service';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  userSubscription: Subscription;
  // tslint:disable-next-line:no-inferrable-types
  latchActivated: Boolean = false;
  latchForm;
  code: String;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
    private usersService: UsersService ) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        // tslint:disable-next-line:no-debugger
        if ( params['id'] ) {
          this.usersService
          .get(params['id'])
          .subscribe(user => {
            this.user = user;
            this.userSubscription = this.sessionService.onUserChanges()
              .subscribe(user2 => this.user = user2);
          });
        } else {
          this.user = this.sessionService.getUser();
          this.userSubscription = this.sessionService.onUserChanges()
          .subscribe(user => this.user = user);
        }
        this.latchForm = new FormGroup({
          code: new FormControl('', Validators.required)
        });
      }
    );
    }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
 toggleLatchActivation() {
  this.latchActivated = !this.latchActivated;
 }

 pair(latchForm: NgForm) {
  this.usersService.pair(this.code, this.user).subscribe(
    (user) => {
      this.latchForm.reset();
      this.user.paired = true;
    },
    (error) => {
      console.log(error);
    }
  );
}

}
