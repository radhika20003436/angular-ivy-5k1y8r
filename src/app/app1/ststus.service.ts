import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StstusService {
  private statusSource = new BehaviorSubject('OFF'); // set default status
  currentStatus = this.statusSource.asObservable();
  constructor() {}
  changeStatus(status: string) {
    this.statusSource.next(status);
  }
}
