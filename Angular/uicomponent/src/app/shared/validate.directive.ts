import { Directive, Input, HostListener, OnInit } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

interface validationRules{
  [key: string]: string
}
@Directive({
  selector: '[validate]',
  exportAs: 'validateRules'
})
export class ValidateDirective implements OnInit {
  @Input() validate: string;
  validationRules: validationRules = {};
  validatorArray(temp: validationRules): ValidatorFn[] {
    let arr: ValidatorFn[] =[];
    Object.keys(temp).forEach((vk)=>{
      console.log(vk)
      if(String(vk) == 'required')
        arr.push(Validators.required)
      if(String(vk) == 'minlength_5')
        arr.push(Validators.minLength(5))
      if(String(vk) == 'maxlength_50')
        arr.push(Validators.maxLength(50))
    })
    return arr;
  };
  constructor() {}
  ngOnInit(): void{
    let rules = this.validate.split('||');    
    Object.keys(rules).forEach((rk) =>{
      let ruleName = rules[rk].split(':')[0].trim(), ruleMessage = rules[rk].split(':')[1].trim();
      this.validationRules[ruleName] = ruleMessage;
    })
    // Object.keys(this.validationRules).forEach((vk)=>{
    //   if(String(vk) == 'required')
    //     this.validatorArray.push(Validators.required)
    //   if(String(vk) == 'minlength_5')
    //     this.validatorArray.push(Validators.minLength(5))
    // })
    // console.log(this.validatorArray)
  }

}
