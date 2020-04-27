import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpModalComponent } from './np-modal.component';
import { NpModalHeaderComponent } from './np-modal-header.component';
import { NpModalContentComponent } from './np-modal-content.component';
import { NpModalFooterComponent } from './np-modal-footer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [NpModalComponent,
    NpModalHeaderComponent,
    NpModalContentComponent,
    NpModalFooterComponent],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [NpModalComponent,
    NpModalHeaderComponent,
    NpModalContentComponent,
    NpModalFooterComponent]
})
export class NpModalModule { }