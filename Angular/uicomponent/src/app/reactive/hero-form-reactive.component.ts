/* tslint:disable: member-ordering forin */
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn } from "@angular/forms";

import { Validator } from "../shared/validator";
import { CrsPatterns } from '../shared/pattern';
import { ValidateService } from '../shared/validate.service';

@Component({
  selector: "hero-form-reactive3",
  templateUrl: "./hero-form-reactive.component.html"
})
export class HeroFormReactiveComponent implements OnInit {
  regex= new CrsPatterns();

  submitted = false;

  onSubmit(form: FormGroup) {
    console.log(form.status)
    this.submitted = true;
  }
  
  @ViewChild('userid') userid:ElementRef;
  @ViewChild('password') password:ElementRef;
  @ViewChild('cardNumber') cardNumber:ElementRef;
  @ViewChild('cardName') cardName:ElementRef;
  @ViewChild('cvv') cvv:ElementRef;
  @ViewChild('ssn') ssn:ElementRef;

  heroForm: FormGroup;
  constructor(private fb: FormBuilder, private validateService: ValidateService) {}
  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(): void {
    this.heroForm = this.fb.group({
      "userId": ['', this.validateService.setRules(this.userid.nativeElement.attributes.validate.nodeValue, 'userId')],
      "password": ['', this.validateService.setRules(this.password.nativeElement.attributes.validate.nodeValue, 'password')],
      "card_number": ['', this.validateService.setRules(this.cardNumber.nativeElement.attributes.validate.nodeValue, 'card_number')],
      "card_name": ['', this.validateService.setRules(this.cardName.nativeElement.attributes.validate.nodeValue, 'card_name')],
      "cvv": ['', this.validateService.setRules(this.cvv.nativeElement.attributes.validate.nodeValue, 'cvv')],
      "ssn": ['', this.validateService.setRules(this.ssn.nativeElement.attributes.validate.nodeValue, 'ssn')]
    });
    this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if(!this.heroForm) { return; }
    console.log(this.heroForm.controls.userId)
    this.formErrors = this.validateService.validate(this.heroForm,this.regex.config);
  }

  formErrors = {};
}
