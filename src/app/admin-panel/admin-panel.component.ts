import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Threat } from '../threat';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  PendingThreats: Threat[];
  Urgency: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPendingThreats();
  }

  getPendingThreats(): void {
    this.dataService.ObservablePendingList.subscribe(threats => this.PendingThreats = threats);
  }

  setUrgencyLow(): void {
    this.Urgency = 1;
  }

  setUrgencyMedium(): void {
    this.Urgency = 2;
  }

  setUrgencyHigh(): void {
    this.Urgency = 3;
  }

  clickAccept(x: Threat): void {
    x.urgency = this.Urgency;
    this.dataService.ThreatList.push(x);

    for (let index = 0; index < this.dataService.PendingList.length; index++) {
      if (x.id === this.dataService.PendingList[index].id) {
        this.dataService.PendingList.splice(index, 1);
        break;
      }
    }
  }

  clickDeny(x: Threat): void {
    for (let index = 0; index < this.dataService.PendingList.length; index++) {
      if (x.id === this.dataService.PendingList[index].id) {
        this.dataService.PendingList.splice(index, 1);
        break;
      }
    }
  }

}
