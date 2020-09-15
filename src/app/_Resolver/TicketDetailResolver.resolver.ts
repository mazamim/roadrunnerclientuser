
import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';


import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../Tickets/tickets/ticket.service';
import {ITicket} from '../_Models/ITicket'

@Injectable()
export class TicketDetailResolver implements Resolve<ITicket> {
  constructor(
    private tktservice: TicketService,
    private router: Router,
private toaster:ToastrService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITicket> {
    return this.tktservice.GetTicketListbyID(route.params[`id`]).pipe(
      catchError(error => {
        this.toaster.error('Problem retrieving data');
        this.router.navigate(['/dashboard']);
        return of(null);
      })
    );
  }
}
