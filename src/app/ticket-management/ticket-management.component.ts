import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {
  images = [
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
    'https://via.placeholder.com/150/0000FF/808080',
  ];

  imageIndexOne = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
