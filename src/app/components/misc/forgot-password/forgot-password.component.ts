import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  user: User = new User();
  apiError: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmitForgot(form: NgForm): void {
    console.log(form);
    console.log(this.user.email);
    this.sessionService.forgotPassword(this.user.email).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
}
}
