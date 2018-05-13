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
  signupForm;
  showPassword: boolean = false;
  user: User = new User();
  apiError: string;
  interests: Array <string> = [];
  selectedInterests: Array <string> = [];
  signupStatusOK: boolean;

  @ViewChild('imageFile') imageFile;

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
      'confirmPassword': new FormControl(null, [ this.comparePassword.bind( this ) ]),
      'interests': new FormArray([]),
      'image': new FormControl()

    });
  }

  onSubmitSignup(form: NgForm): void {
    const imageFile = this.imageFile.nativeElement;

    this.user.interests = this.selectedInterests;

    if (imageFile.files && imageFile.files[0]) {
      this.user.image = imageFile.files[0];
    }

    this.usersService.create(this.user).subscribe(
      (user) => {
        form.reset();
        this.signupStatusOK = true;
        this.router.navigate(['/login']);
      },
      (error) => {
        this.apiError = error.message;
        this.signupStatusOK = false;
      }
    );
  }

  onAddInterest(event) {
    const newInterest = event.target.id;

    if (this.selectedInterests.includes(newInterest)) {
      this.selectedInterests = this.selectedInterests.filter(i => i !== newInterest);
    } else {
      this.selectedInterests.push(newInterest);
    }
  }

  toggleVisibilityPassword() {
    this.showPassword = !this.showPassword;
  }

  comparePassword(control: FormControl): { [s: string]: boolean } {

    if (control.value !== this.user.password) {
      return { passwords: true };
    }

    return null;

  }

//   onFileChange(event) {
//     if (event.target.files.length > 0) {
//       this.data = event.target.files[0];
//     }
//   }
}
