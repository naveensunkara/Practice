import { NgForm, FormGroup } from "@angular/forms";
import {CrsPatterns} from './pattern';
interface Config {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

export class Validator {
  config: Config;
  formErrors: {};
  regex = new CrsPatterns();
  constructor(config: Config) {
    this.config = config;
  }

  validate(ngForm: NgForm | FormGroup) {
    this.formErrors = {};
    Object.keys(ngForm.controls).forEach((ck) => {
      this.formErrors[ck] = "";
      let control = null;
      if((<FormGroup>ngForm).get) {
        control = (<FormGroup>ngForm).get(ck);
      } else {
        control = (<NgForm>ngForm).form.get(ck);
      }
      if(control && control.dirty && !control.valid) {
        Object.keys(control.errors).forEach((ek) => {
          if(ek == "pattern" && typeof this.config[ck][ek] != 'string'){
            Object.keys(this.config[ck][ek]).forEach((pk) =>{
              if(control.errors[ek].requiredPattern == this.regex[pk])
                this.formErrors[ck] +=  this.config[ck][ek][pk] + " ";
            })
          }
          else
            this.formErrors[ck] +=  this.config[ck][ek] + " ";
        });
      }
    });
    return this.formErrors;
  }
}
