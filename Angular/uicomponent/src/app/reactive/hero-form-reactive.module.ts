import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { HeroFormReactiveComponent } from "./hero-form-reactive.component";
import { MaskDirective } from '../shared/mask.directive';

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule ],
  declarations: [HeroFormReactiveComponent, MaskDirective],
  exports: [HeroFormReactiveComponent]
})
export class HeroFormReactiveModule { }
