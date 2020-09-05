import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guard/auth.guard';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { EmployeeEditComponent } from './Employees/employee-edit/employee-edit.component';
import { AttendanceComponent } from './Employees/attendance/attendance.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'employees', component: EmployeeComponent, canActivate:[AuthGuard]},
  { path: 'employees/:id', component: EmployeeEditComponent, canActivate:[AuthGuard]},
  { path: 'attendance', component: AttendanceComponent, canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
