
import { Component, OnInit } from '@angular/core';
import { StstusService } from '../ststus.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css'],
})
export class App2Component implements OnInit {
  status: string;
  constructor(private data: StstusService) {}

  ngOnInit() {
    this.data.currentStatus.subscribe((status) => (this.status = status));
  }
  changeStatus() {
    this.data.changeStatus('ON');
  }
}