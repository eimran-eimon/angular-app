import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserNames = ['eimon', 'eimran'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.checkForBiddenUserNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], [this.checkForbiddenEmail]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    // later: subscribed to statusChanged and valueChanged
  }


  onSubmit() {
    console.log(this.signUpForm);
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(control);
  }

  checkForBiddenUserNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return ({forBiddenName: true});
    } else {
      return null;
    }
  }

  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    }));
  }
}


