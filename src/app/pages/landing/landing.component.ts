import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesModalComponent } from '../modal/services-modal/services-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    const dialogRef = this.dialog.open(ServicesModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      // SUBMIT API HERE
      console.log(result);
    });
  }

}
