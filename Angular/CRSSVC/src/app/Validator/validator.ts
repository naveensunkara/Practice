import { NgForm, FormGroup } from "@angular/forms";
import { Messages } from './error-messages';

interface Config {
  [key: string]: {
    [key: string]: { [key: string]: string }
  };
}

export class CRSValidator {
  config: Config;
  formErrors: object;
  constructor(config: Config) {
    this.config = config;
  }

  rules: object = {
    user_id: /^[0-9\sA-Za-z\u00C0-\u00FF\~\#\";\/!@`$%^&*()_\+\{\}\?\-\[\]\\,.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u2013\u2014\u00C6\u00E6\u00C4\u00E4\u20A3]{5,50}$/,
    password: /^[^|]{6,32}$/
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
          this.formErrors[ck] += this.replacedToArgs(Messages[ek], this.config[ck][ek]) + " ";
        });
      }
    });
    return this.formErrors;
  }

  private replacedToArgs(message: string, args: { [key: string]: string }) {
    Object.keys(args).forEach((arg) => {
      message = message.replace(new RegExp(`{${arg}}`, "g"), args[arg]);
    });
    return message;
  }
}
