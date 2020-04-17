import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NpUiDataGridDemoRoutingModule } from './np-ui-data-grid-demo-routing.module';
import { NpUiDataGridDemoComponent } from './np-ui-data-grid-demo.component';
import { NpUiDataGridModule, NpUiSwitchModule, NpUiPanelModule } from 'projects/np-ui-lib/src/public-api';

import { ClientGridComponent } from './client-grid/client-grid.component';
import { ServerGridComponent } from './server-grid/server-grid.component';
import { SortingGridComponent } from './sorting-grid/sorting-grid.component';
import { FilterGridComponent } from './filter-grid/filter-grid.component';
import { CelltemplateGridComponent } from './celltemplate-grid/celltemplate-grid.component';
import { ToolbarGridComponent } from './toolbar-grid/toolbar-grid.component';
import { ColumnsGridComponent } from './columns-grid/columns-grid.component';
import { RowSelectGridComponent } from './row-select-grid/row-select-grid.component';
import { MasterChildGridComponent } from './master-detail-grid/master-detail-grid.component';
import { SummaryGridComponent } from './summary-grid/summary-grid.component';
import { StateManagementGridComponent } from './state-management-grid/state-management-grid.component';
import { OtherGridComponent } from './other-grid/other-grid.component';
import { ClientGridAllComponent } from './client-grid-all/client-grid-all.component';
import { ServerGridAllComponent } from './server-grid-all/server-grid-all.component';
import { OdataGridComponent } from './odata-grid/odata-grid.component';
import { InsideTabGridComponent } from './inside-tab-grid/inside-tab-grid.component';

@NgModule({
  declarations: [
    NpUiDataGridDemoComponent,
    ClientGridComponent,
    ServerGridComponent,
    SortingGridComponent,
    SortingGridComponent,
    FilterGridComponent,
    CelltemplateGridComponent,
    ToolbarGridComponent,
    ColumnsGridComponent,
    RowSelectGridComponent,
    MasterChildGridComponent,
    SummaryGridComponent,
    StateManagementGridComponent,
    OtherGridComponent,
    ClientGridAllComponent,
    ServerGridAllComponent,
    OdataGridComponent,
    InsideTabGridComponent],
  imports: [
    NpUiDataGridDemoRoutingModule,
    NpUiDataGridModule,
    CommonModule,
    FormsModule,
    NpUiSwitchModule,
    NpUiPanelModule
  ]
})
export class NpUiDataGridDemoModule { }
