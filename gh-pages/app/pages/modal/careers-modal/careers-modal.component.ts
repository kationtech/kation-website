import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-careers-modal',
  templateUrl: './careers-modal.component.html',
  styleUrls: ['./careers-modal.component.scss']
})
export class CareersModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    
  }

}
