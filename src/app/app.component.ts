import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_Services/auth.service';
import { User } from './_Models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clientAdmin';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService,private router:Router) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('username'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      this.router.navigate(['/dashboard']);
    }
    if (user) {
      this.authService.currentUser = user;
     // this.authService.changeMemberPhoto(user.photoUrl);


  }

}


}


