import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { HeroFormReactiveComponent } from "./hero-form-reactive.component";
import { MaskDirective } from '../shared/mask.directive';
//import { ValidateDirective } from '../shared/validate.directive';
import { ValidateService } from '../shared/validate.service';

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule ],
  declarations: [HeroFormReactiveComponent, MaskDirective],
  exports: [HeroFormReactiveComponent],
  providers: [ ValidateService ]
})
export class HeroFormReactiveModule { }
