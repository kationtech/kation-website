import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesModalComponent } from '../modal/services-modal/services-modal.component';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public utils: UtilsService
  ) { }

  ngOnInit(): void {
  }

  showModal() {
    const dialogRef = this.dialog.open(ServicesModalComponent, {
      width: '800px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      // SUBMIT API HERE
      console.log(result);
      let finalData = {
        type: result.type,
        description: '',
        industry: result.industry,
        service: result.service,
        company_size: result.company_size,
        has_technology: JSON.parse(result.has_technology),
        name: '',
        email: '',
        contact_number: '',
        subscription: false
      }

      localStorage.setItem('data', JSON.stringify(finalData))
    });
  }

}
