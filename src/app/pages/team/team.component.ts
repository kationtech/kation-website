import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CareersModalComponent } from '../modal/careers-modal/careers-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  careerList = [{
    id: "001",
    title: "Business Apps Developers",
    subtitle: "(Power Apps)",
    salary: "Php 50,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "
  }, {
    id: "002",
    title: "Business Apps Consultants",
    subtitle: "(Microsoft Finance and Operations, CRM)",
    salary: "Php 50,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "
  }];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getCareerDetails(id: string) {
    let data = null;
    this.careerList.forEach( value => {
      if(value.id === id) {
        data = value
      }
    });
    this.showCareerDetails(data)
  }

  showCareerDetails(data: any){
    this.dialog.open(CareersModalComponent, {data});
  }

}
