import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  reply: string;
  genders = ['Male', 'Female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // LATER: USE signUpForm.setValue() for whole form
    this.signUpForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
}
