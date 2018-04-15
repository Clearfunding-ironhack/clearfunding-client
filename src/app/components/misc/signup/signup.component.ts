import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';
import { User } from './../../../shared/models/user.model';
import { UsersService} from './../../../shared/services/users.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { InterestsService } from './../../../shared/services/interests.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  showPassword: boolean = false;
  user: User = new User();
  apiError: string;
  interests: Array <string> = [];
  selectedInterests: Array <string> = [];

  data: any;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private interestsService: InterestsService
  ) { }

  ngOnInit() {
    this.interests = this.interestsService.getInterests();
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // 'confirmPassword': new FormControl(null, Validators.required),
      'interests': new FormArray([]),
      'image': new FormControl()

    });
  }

  onSubmitSignup(form: NgForm): void {
    this.user.interests = this.selectedInterests;
    this.usersService.create(this.user).subscribe(
      (user) => {
        form.reset();
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }

  onAddInterest(event) {
    const newInterest = event.target.id;
    if (this.selectedInterests.includes(newInterest)) {
      this.selectedInterests.filter(i => i !== newInterest);
    } else {
      this.selectedInterests.push(newInterest);
    }
    console.log(this.selectedInterests);
  }

  toggleVisibilityPassword() {
    this.showPassword = !this.showPassword;
  }

//   onFileChange(event) {
//     if (event.target.files.length > 0) {
//       this.data = event.target.files[0];
//     }
//   }
}
