import { NgForm, FormGroup } from "@angular/forms";
import { Messages } from "./messages";

interface Config {
  [key: string]: {
    [key: string]: { [key: string]: string }
  };
}

export class Validator {
  config: Config;
  formErrors: {};

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
