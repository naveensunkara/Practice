import { Injectable } from '@angular/core';
import { NgForm, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { CrsPatterns } from './pattern';

interface Config {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

interface validationRules{
  [key: string]: string
} 
@Injectable()
export class ValidateService {
  pattern = new CrsPatterns();
  validationRules: object = {};
  constructor() {}

  setRules(validate:string, field:string): any{
    let rules = validate.split('||'), validateArray = [], fieldRule = {};    
    Object.keys(rules).forEach((rk) =>{
      let ruleName = rules[rk].split(':')[0].trim(), ruleMessage = rules[rk].split(':')[1].trim();
      fieldRule[ruleName] = ruleMessage;
    })
    this.validationRules[field] = fieldRule;
    Object.keys(this.validationRules).forEach((v) =>{
      if(v == 'required'){
        validateArray.push(Validators.required);
      }
      else if(v.indexOf('minlength') > -1){
        let min = Number(v.split('_')[1]);
        validateArray.push(Validators.minLength(min));
      }
      else if(v.indexOf('maxlength')>-1){
        let max = Number(v.split('_')[1]);
        validateArray.push(Validators.maxLength(max));
      }
      else{
        validateArray.push(Validators.pattern(this.pattern[v]));
      }
    })
    return validateArray;
  }

  validate(ngForm: NgForm | FormGroup, config: Config) {
    let formErrors = {};
    Object.keys(ngForm.controls).forEach((ck) => {
      formErrors[ck] = "";
      let control = null;
      if((<FormGroup>ngForm).get) {
        control = (<FormGroup>ngForm).get(ck);
      } else {
        control = (<NgForm>ngForm).form.get(ck);
      }
      if(control && control.dirty && !control.valid) {
        Object.keys(control.errors).forEach((ek) => {
          if(ek == "pattern" && typeof config[ck][ek] != 'string'){
            Object.keys(config[ck][ek]).forEach((pk) =>{
              if(control.errors[ek].requiredPattern == this.pattern[pk])
                formErrors[ck] +=  config[ck][ek][pk] + " ";
            })
          }
          else
            formErrors[ck] +=  config[ck][ek] + " ";
        });
      }
    });
    return formErrors;
  }
}
