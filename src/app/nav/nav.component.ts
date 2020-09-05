import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService,
    public toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {

    this.authService.login(this.model).subscribe((next) => {
      this.toastr.success("Logged in Successfully");
    },
      error => {
        this.toastr.error(error);

      },
      () => {

        this.router.navigate(['/dashboard']);
      }

    )

  }


  loggedIN() {

    const token = localStorage.getItem('token');
    return !!token;
  }

  loggedOUT() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken=null;
    this.authService.currentUser=null;

    this.toastr.info("Logout");
    this.router.navigate(['/home']);
  }

}
