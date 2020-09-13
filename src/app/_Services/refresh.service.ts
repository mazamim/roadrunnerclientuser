import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(private location:Location,private router: Router) { }

  refresh(): void{

    this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(()=>{

      this.router.navigate([decodeURI(this.location.path())]);

    });
  }
}
