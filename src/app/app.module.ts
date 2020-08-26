import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//packages
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains : ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/Auth/Register']
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
