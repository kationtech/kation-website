import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsModalComponent } from '../modal/details-modal/details-modal.component';

@Component({
  selector: 'app-business-service',
  templateUrl: './business-service.component.html',
  styleUrls: ['./business-service.component.scss']
})
export class BusinessServiceComponent implements OnInit {

  services = [{
    title: "Co-Strategic Partnerships",
    desc: "Expert services from to senior level consultants to unlock strategic adoption of new technologies and processes, closely aligned with your business and your other technology partners.",
    color: "#dae1e5",
    text: "black"
  }, {
    title: "Empathic Design Thinking Workshops and Solutioning",
    desc: "Design and delivery of services, strategic insight and products that build on the human strength and uniqueness of your business and your customers",
    color: "#dae1e5",
    text: "black"
  }, {
    title: "Business Application Consulting",
    desc: "Our business application experts deliver advisory and system design solutions in the areas of process transformation, operational performance, customer engagement, and workforce productivity. ",
    color: "#dae1e5",
    text: "black"
  }, {
    title: "Humane Apps at Hand and Robotic Process Automation (RPA) for Workforce Productivity",
    desc: "Real-world applications to enable and support frontliners and other critical players in your value chain.",
    color: "#dae1e5",
    text: "black"
  }, {
    title: "Hybrid Integration Platforms (HIP) and HIP Services for Technology and Process Integration",
    desc: "Robust support and connectivity for the complex multi-level, multi-channel, and multi-platform ecosystem of today’s marketplaces and workplaces.",
    color: "#dae1e5",
    text: "black"
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

}

  navigateTo(path: string){
    this.router.navigate([path]), { relativeTo: this.route }
  }

  showDetails(data: any){
    data.type = 'subservice-details';
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      width: '500px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/partnerWithUs']);
      }
    });
  }

}
