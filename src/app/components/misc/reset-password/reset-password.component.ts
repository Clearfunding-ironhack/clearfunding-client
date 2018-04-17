import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  user: User = new User();

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
  onSubmitReset(form: NgForm) {
    console.log(form);
  }
}
