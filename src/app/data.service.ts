import { Injectable } from '@angular/core';
import { Threat } from './threat';
import { THREATS, PENDING_THREATS } from './mock-threats';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  ThreatList: Threat[] = this.getMockThreats();
  PendingList: Threat[] = this.getPendingThreats();

  ObservableThreatList: Observable<Threat[]> = of(this.ThreatList);
  ObservablePendingList: Observable<Threat[]> = of(this.PendingList);

  getMockThreats(): Threat[] {
    return THREATS;
  }

  getPendingThreats(): Threat[] {
    return PENDING_THREATS;
  }

  constructor() { }

}
