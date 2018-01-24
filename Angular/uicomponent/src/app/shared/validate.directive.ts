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
  constructor() {}
  setRules(): any{
    let rules = this.validate.split('||');
    let validationRules = {};    
    Object.keys(rules).forEach((rk) =>{
      let ruleName = rules[rk].split(':')[0].trim(), ruleMessage = rules[rk].split(':')[1].trim();
      validationRules[ruleName] = ruleMessage;
    })
    return validationRules;
  }
  ngOnInit(): void{
    let rules = this.validate.split('||'); 
    Object.keys(rules).forEach((rk) =>{
      let ruleName = rules[rk].split(':')[0].trim(), ruleMessage = rules[rk].split(':')[1].trim();
      this.validationRules[ruleName] = ruleMessage;
    })
  }

}
