import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpUtilityDemoRoutingModule } from './np-utility-demo-routing.module';
import { NpUtilityDemoComponent } from './np-utility-demo.component';
import {
  NpUtilityModule, NpHightLightPipe, NpDatePickerModule, NpTimePickerModule, NpSwitchModule,
  NpFileUploadModule, NpCardModule, NpInputTextModule, NpTextareaModule
} from 'np-ui-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpUtilityDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpUtilityDemoRoutingModule,
    NpUtilityModule,
    NpDatePickerModule,
    NpTimePickerModule,
    NpInputTextModule,
    NpSwitchModule,
    NpFileUploadModule,
    NpTextareaModule,
    NpCardModule
  ],
  providers: [NpHightLightPipe]
})
export class NpUtilityDemoModule { }
