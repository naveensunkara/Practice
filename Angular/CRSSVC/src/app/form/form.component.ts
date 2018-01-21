import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'

import { CRSValidator } from '../Validator/validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  crsValidation: CRSValidator;
  crsForm: FormGroup;
  userId: string = 'Naveen';
  config = {
    "userId": {
      "required": {"field": "User ID"},
      "pattern": {}
    }
  }
  constructor(private fb: FormBuilder) {
    this.crsValidation = new CRSValidator(this.config);
  }
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
    this.crsForm = this.fb.group({
      userId: ['']
    })

    this.crsForm.get('userId').valueChanges.subscribe(data => console.log(data)); 
    
    this.onValueChanged();   
  }

  onValueChanged(data?: any) {
    if(!this.crsForm) { return; }
    this.formErrors = this.crsValidation.validate(this.crsForm);
    console.log('running');
  }

  formErrors = {};
}
