import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Threat } from '../threat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-threat',
  templateUrl: './threat.component.html',
  styleUrls: ['./threat.component.css']
})
export class ThreatComponent implements OnInit {

  threatList: Threat[];
  selectedThreat: Threat;
  adminView: boolean;

  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) { }

  getThreats() {
    this.threatList = this.dataService.getMockThreats();
  }

  ngOnInit() {
    this.adminView = false;
    this.getThreats();
    this.checkIfAdmin();
  }

  onSelect(threat: Threat): void {
    this.selectedThreat = threat;
  }

  checkIfAdmin(): void {
    if (this.route.snapshot.url.toString() === 'adminaccess') {
      this.adminView = true;
    }
  }

  btnThreatOver(): void {
    for (let index = 0; index < this.dataService.ThreatList.length; index++) {

      if (this.selectedThreat.id === this.dataService.ThreatList[index].id) {
        this.dataService.ThreatList.splice(index, 1);
        break;
      }

    }
  }

}
