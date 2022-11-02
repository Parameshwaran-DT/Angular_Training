import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { DynamicColorDirective } from '../directive/dynamic-color.directive';
@NgModule({
  declarations: [
    CustomersComponent,
    DynamicColorDirective
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
