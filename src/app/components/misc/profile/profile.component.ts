import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Subscription
} from 'rxjs/Rx';
import {
  UsersService
} from './../../../shared/services/users.service';
import {
  SessionService
} from './../../../shared/services/session.service';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  User
} from '../../../shared/models/user.model';
import {
  FormGroup,
  Validators,
  FormControl,
  NgForm
} from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  // tslint:disable-next-line:no-inferrable-types
  latchActivated: Boolean = false;
  latchForm;
  code: String;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private routes: ActivatedRoute,
    private usersService: UsersService) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        // tslint:disable-next-line:no-debugger
        let id = params['id'];
        if (!params['id']) {
          id = this.sessionService.getUser().id;
        } 
  
        this.usersService
          .get(id)
          .subscribe(user => {
            this.user = user;
          });

        this.latchForm = new FormGroup({
          code: new FormControl('', Validators.required)
        });
      });
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
  onClickTitle(id: number) {
    this.router.navigate(['/campaigns', id]);
  }
}

