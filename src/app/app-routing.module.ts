import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guard/auth.guard';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit.component';
import { AttendanceComponent } from './Employees/attendance/attendance.component';
import { CustomerComponent } from './Customer/customer/customer.component';
import { ClientComponent } from './Client/client/client.component';
import { TicketsComponent } from './Tickets/tickets/tickets.component';
import { TicketEditComponent } from './Tickets/ticket-edit/ticket-edit.component';
import { AddBulkTicketsComponent } from './Tickets/add-bulk-tickets/add-bulk-tickets.component';
import { TicketDetailResolver } from './_Resolver/TicketDetailResolver.resolver';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' }, canActivate:[AuthGuard]},
  { path: 'employees', component: EmployeeComponent,data: { breadcrumb: 'Employees' }, canActivate:[AuthGuard]},
  { path: 'employees/:id', component: EmployeeEditComponent, data: { breadcrumb: 'Employee Edit' },canActivate:[AuthGuard]},
  { path: 'attendance', component: AttendanceComponent, data: { breadcrumb: 'Attendance' }, canActivate:[AuthGuard]},
  { path: 'customers', component: CustomerComponent, data: { breadcrumb: 'Customer' },canActivate:[AuthGuard]},
  { path: 'customers/:id', component: EmployeeEditComponent, canActivate:[AuthGuard]},
  { path: 'clients', component: ClientComponent, data: { breadcrumb: 'Client' },canActivate:[AuthGuard]},
  { path: 'clients/:id', component: EmployeeEditComponent, canActivate:[AuthGuard]},
  { path: 'tickets', component: TicketsComponent, data: { breadcrumb: 'Ticket' },canActivate:[AuthGuard]},
  { path: 'tickets/:id', component: TicketEditComponent,
  canActivate:[AuthGuard],
  resolve: { tickets: TicketDetailResolver }},
  { path: 'ticket/addbulk', component: AddBulkTicketsComponent, canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
