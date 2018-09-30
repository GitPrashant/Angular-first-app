import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapse: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

}
