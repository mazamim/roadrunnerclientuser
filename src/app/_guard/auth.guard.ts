import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_Services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private alertify: ToastrService) { }


  canActivate(): boolean {

    if (this.authService.logedIN()) { return true; }
    this.alertify.error("You are not allowed");
    this.router.navigate(['/home']);
    return false;
  }

}
