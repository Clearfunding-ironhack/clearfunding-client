import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from './../../../shared/models/user.model';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User = new User();
  apiError: string;


  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  onSubmitLogin(form: NgForm): void {
    console.log(form);
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/campaigns']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

}

