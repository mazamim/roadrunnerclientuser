import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//packages
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FileUploadModule } from 'ng2-file-upload';
import { OwlModule } from 'ngx-owl-carousel';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MomentModule } from 'ngx-moment';

//material
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SidebarStickyComponent } from './dashboard/sidebar-sticky/sidebar-sticky.component';
import { ContentMainComponent } from './dashboard/content-main/content-main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { TableandchartComponent } from './dashboard/tableandchart/tableandchart.component';

import { EmployeeComponent } from './Employees/employee/employee.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogContentEmployeesComponent } from './Employees/dialog-content-employees/dialog-content-employees.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit.component';
import { DocumentEditorComponent } from './Employees/document-editor/document-editor.component';
import { AttendanceComponent } from './Employees/attendance/attendance.component';
import { CustomerComponent } from './Customer/customer/customer.component';
import { ClientComponent } from './Client/client/client.component';
import { DialogContentCustomerComponent } from './Customer/dialog-content-customer/dialog-content-customer.component';
import { LoadingInterceptor } from './Helpers/interceptors/loading.interceptor';
import { SectionHeaderComponent } from './Helpers/section-header/section-header.component';
import { DialogContentClientComponent } from './Client/dialog-content-client/dialog-content-client.component';
import { TicketsComponent } from './Tickets/tickets/tickets.component';

import { RatecardComponent } from './Tickets/ratecard/ratecard.component';
import { TicketEditComponent } from './Tickets/ticket-edit/ticket-edit.component';
import { OpendialogforTicketTimeComponent } from './Tickets/opendialogfor-ticket-time/opendialogfor-ticket-time.component';
import { AddBulkTicketsComponent } from './Tickets/add-bulk-tickets/add-bulk-tickets.component';
import { RefreshComponent } from './refresh/refresh.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

// export class CustomHammerConfig extends HammerGestureConfig  {
//   overrides = {
//       pinch: { enable: false },
//       rotate: { enable: false }
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    OrderComponent,
    DashboardComponent,
    SidebarStickyComponent,
    ContentMainComponent,
    SectionHeaderComponent,
    TableandchartComponent,
    EmployeeComponent,
    DialogContentEmployeesComponent,
    EmployeeEditComponent,
    DocumentEditorComponent,
    AttendanceComponent,
    CustomerComponent,
    ClientComponent,
    DialogContentCustomerComponent,
    DialogContentClientComponent,
    TicketsComponent,

    RatecardComponent,

    TicketEditComponent,

    OpendialogforTicketTimeComponent,

    AddBulkTicketsComponent,

    RefreshComponent,


  ],
  imports: [

    //angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    //package
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains : ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/Auth/Register']
      }
    }),
    BreadcrumbModule,
    OwlModule,
    TimepickerModule.forRoot(),


    //ngx
    NgxChartsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxSpinnerModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    FileUploadModule,
    MomentModule,

    //material
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatTableExporterModule



  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
