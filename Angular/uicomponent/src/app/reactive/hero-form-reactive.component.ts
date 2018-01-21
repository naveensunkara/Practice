/* tslint:disable: member-ordering forin */
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Validator } from "../shared/validator";
import { CrsPatterns } from '../shared/pattern';

@Component({
  selector: "hero-form-reactive3",
  templateUrl: "./hero-form-reactive.component.html"
})
export class HeroFormReactiveComponent implements OnInit {
  regex= new CrsPatterns();

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  config = {
    "userId": {
      required:  "Please enter your User ID to sign on." ,
      minlength: "Your User ID must be five to 50 characters in length.",
      maxlength: "Your User ID must be five to 50 characters in length.",
      pattern: "Please try again. Certain special characters are not allowed."
    },
    "password": {
      required:  "Please enter your User ID to sign on." ,
      minlength: "Your User ID must be five to 32 characters in length.",
      maxlength: "Your User ID must be five to 32 characters in length.",
      pattern: "Please try again. Certain special characters are not allowed."
    },
    "card_number": {
      required:  "Please enter a valid Card Number." ,
      pattern: {
        card_number_format: "Please enter a valid Card Number using numbers only.",
        card_number_length: "Please enter a valid Card Number."
      }
    },
    "card_name": {
      required:  "Please enter the Name as it Appears on Your Card." ,
      minlength: "Please enter the Name as it Appears on Your Card.",
      maxlength: "Please enter the Name as it Appears on Your Card.",
      pattern: "Please enter the Name as it Appears on Your Card without using numbers. Certain special characters are not allowed."
    },
    "cvv": {
      required:  "Please enter your Security Code." ,
      maxlength: "Please re-enter your Security Code. Your entry must have 3 or 4 numbers, and cannot contain letters or special characters.",
      pattern: "Please re-enter your Security Code. Your entry must have 3 or 4 numbers, and cannot contain letters or special characters."
    },
    "ssn": {
      required:  "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number." ,
      maxlength: "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number using numbers only.",
      pattern: "Please enter the Last 4 Digits of the Primary Cardholder's Social Security Number using numbers only."
    }
  };
  
  validator:Validator;

  heroForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.validator = new Validator(this.config);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.heroForm = this.fb.group({
      "userId": ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(this.regex.user_id)]],
      "password": ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32), Validators.pattern(this.regex.password)]],
      "card_number": ['', [Validators.required, Validators.pattern(this.regex.card_number_length), Validators.pattern(this.regex.card_number_format)]],
      "card_name": ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(this.regex.card_name)]],
      "cvv": ['', [Validators.required, Validators.maxLength(4), Validators.pattern(this.regex.cvv)]],
      "ssn": ['', [Validators.required, Validators.maxLength(4), Validators.pattern(this.regex.last_four_digits)]]
    });
    this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if(!this.heroForm) { return; }
    this.formErrors = this.validator.validate(this.heroForm);
  }

  formErrors = {};
}
