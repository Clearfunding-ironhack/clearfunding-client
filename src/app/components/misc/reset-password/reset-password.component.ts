import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { SessionService } from '../../../shared/services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm;
  user: User = new User();
  token: String = "";
  showPassword: boolean = false;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(null, [ this.comparePassword.bind( this ) ])
    });
  }

  onSubmitReset(form: NgForm) {
    const token = this.routes.snapshot.params['token'];
    const password = form.value.password;
    this.sessionService.resetPassword(password, token). subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
       console.log(error);
      }
    );
  }

  comparePassword(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.user.password) {
      return { passwords: true };
    }
    return null;
  }



toggleVisibilityPassword() {
  this.showPassword = !this.showPassword;
}

}
