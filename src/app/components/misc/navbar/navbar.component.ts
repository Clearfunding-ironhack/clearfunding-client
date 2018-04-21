import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/models/user.model';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  currentUser: User = this.sessionService.user;
  user: User = new User();

  constructor(
    private sessionService: SessionService,
    private routes: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
  ) { }
  ngOnInit() {
  }
  submitLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
