

import { Component, OnInit } from '@angular/core';
import { StstusService } from '../ststus.service';

@Component({
  selector: 'app-app1',
  templateUrl:'./app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  status:string;
  constructor(private data: StstusService) { }

  ngOnInit() {
    this.data.currentStatus.subscribe(status => this.status = status)
  }

}