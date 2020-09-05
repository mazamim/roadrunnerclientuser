import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../_Models/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwthelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();
  constructor(private http: HttpClient) { }

  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
}


login(model: any) {
  return this.http.post(this.baseUrl+'Auth/Login', model).pipe(

    map((reponse: any) => {

      const user = reponse;
      if (user) {
        localStorage.setItem("token", user.token);
        localStorage.setItem('user', JSON.stringify(user.user));
        this.decodedToken = this.jwthelper.decodeToken(user.token)
        this.currentUser = user.user;
       // this.changeMemberPhoto(this.currentUser.photoUrl);
      }

    })

  );
}

logedIN() {

  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);

}

Register(user:User){
return this.http.post(this.baseUrl+'Auth/Register',user);

}


}
