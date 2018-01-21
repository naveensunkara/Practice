/* tslint:disable: member-ordering forin */
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Hero } from "../shared/hero";
import { forbiddenNameValidator } from "../shared/forbidden-name.directive";
import { Validator } from "../shared/validator";

@Component({
  selector: "hero-form-reactive3",
  templateUrl: "./hero-form-reactive.component.html"
})
export class HeroFormReactiveComponent implements OnInit {

  powers = ["Really Smart", "Super Flexible", "Weather Changer"];

  hero = new Hero(18, "Dr. WhatIsHisName", this.powers[0], "Dr. What");

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.hero = this.heroForm.value;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  config = {
    "name": {
      required: { name: "Name1" },
      minlength: { name: "Name", min: "4" },
      maxlength: { name: "Name", max: "24" },
      forbiddenName: { forbiddenName: "Bob" }
    },
    "power": {
      required: { name: "Power" }
    }
  };
  
  validator:Validator;

  addHero() {
    this.hero = new Hero(42, "", "");
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  heroForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.validator = new Validator(this.config);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.heroForm = this.fb.group({
      "name": [this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
        forbiddenNameValidator(/bob/i)
      ]
      ],
      "alterEgo": [this.hero.alterEgo],
      "power": [this.hero.power, Validators.required]
    });

    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if(!this.heroForm) { return; }
    this.formErrors = this.validator.validate(this.heroForm);
    console.log('running')
  }

  formErrors = {};
}
