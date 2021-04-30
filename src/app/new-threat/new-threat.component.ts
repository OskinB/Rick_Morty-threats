import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Threat } from '../threat';

@Component({
  selector: 'app-new-threat',
  templateUrl: './new-threat.component.html',
  styleUrls: ['./new-threat.component.css']
})
export class NewThreatComponent implements OnInit {

  threat: Threat;
  subject: string;
  planet: string;
  description: string;
  destruction: string;
  urgency: number;
  id: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.id = 10;
  }

  clickSubmit(): void {
    this.threat = new Threat(this.id, this.subject, this.planet, this.description, this.urgency, this.destruction);
    this.dataService.PendingList.push(this.threat);
    this.subject = '';
    this.planet = '';
    this.description = '';
    this.destruction = '';
    this.id++;
  }

}
