import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesModalComponent } from '../modal/services-modal/services-modal.component';
import { UtilsService } from 'src/app/utils.service';
import { PromptModalComponent } from '../modal/prompt-modal/prompt-modal.component';

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
    const data = localStorage.getItem('data');
    if (!data || data === 'undefined' || data == '""') {
      setTimeout(() => {
        this.showModal();
      }, 3000);
    }
  }

  showModal() {
    const dialogRef = this.dialog.open(ServicesModalComponent, {
      width: '800px',
      height: 'auto',
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      let finalData = {
        type: result.type,
        description: 'none',
        industry: result.industry,
        service: result.service,
        company_size: result.company_size,
        has_technology: JSON.parse(result.has_technology),
        current_technology: result.current_technology,
        name: '',
        email: '',
        contact_number: '',
        subscription: false
      }

      localStorage.setItem('data', JSON.stringify(finalData))
      let handleSuccess = this.dialog.open(PromptModalComponent, {
        width: '500px',
        data: 'successPrompt'
      });
    });
  }

}
