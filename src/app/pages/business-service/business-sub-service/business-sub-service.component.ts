import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DetailsModalComponent } from '../../modal/details-modal/details-modal.component';

@Component({
  selector: 'app-business-sub-service',
  templateUrl: './business-sub-service.component.html',
  styleUrls: ['./business-sub-service.component.scss']
})
export class BusinessSubServiceComponent implements OnInit {

  subService = [{
    service: "customer-engagement",
    title: "D365 Customer engagement",
    desc: "Dynamics 365’s Customer engagement applications are Microsoft’s first party applications built on the Microsoft Power Platform. Your organization can leverage these applications individually or together to create powerful end-to-end relationships with your customers. While each application provides a specific solution, they share common elements that are the same regardless of the application you are using. This module focuses on the common elements that are used across all the Dynamics 365 customer engagement applications.",
    products: [{
      id: "001",
      title: "Microsoft Dynamics 365 Sales",
      desc: "Go beyond sales force automation to better understand customer needs, engage more effectively, and win more deals."
    }, {
      id: "002",
      title: "Microsoft Dynamics 365 Customer Service",
      desc: "Built-in intelligence delivers faster, more personalized service and adds value to every interaction."
    }, {
      id: "003",
      title: "Microsoft Dynamics 365 Field Service",
      desc: "Built-in intelligence helps you resolve service issues before they occur, reduce operational costs, and deliver positive on-site experiences."
    }, {
      id: "004",
      title: "Microsoft Dynamics 365 Project Operations",
      desc: "Build trusted customer relationships and deliver outstanding project experiences by delivering profitable projects on time and within budget, while increasing employee productivity."
    }, {
      id: "005",
      title: "Microsoft Dynamics 365 for Marketing",
      desc: "Find and nurture more sales-ready leads by moving beyond basic email marketing. Connect sales and marketing, automate processes, and make smarter decisions to maximize your marketing Return on Investment (ROI)."
    }]
  }, {
    service: "finance",
    title: "D365 Finance and Supply Chain",
    desc: "Microsoft Dynamics 365 Finance and Supply Chain Management is a cloud Enterprise Resource Planning (ERP) service for enterprises, built on and for Microsoft Azure. It can provide your organization with ERP functionality that supports your unique requirements and help you adjust to constantly changing business environments, without the hassle of managing infrastructure. Finance and Supply Chain Management brings together a set of ERP, business intelligence, infrastructure, compute, and database services in a single offering that enables organizations to run industry-specific and operational business processes that are extendable with specific solutions.",
    products: [{
      id: "001",
      title: "ERP for Finance, Accounting and Treasury"
    }, {
      id: "002",
      title: "ERP for Manufacturing, Procurement, Supply Chain, Sales Operations, Logistics, Workflow Management"
    }]
  }];
  page: string = '';
  data: any;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.page = this.route.snapshot.params['subservice'];
    this.data = this.page === 'customer-engagement' ? this.subService[0] : this.subService[1];
  }

  showDetails(value: any) {
    value.type = 'subservice-details';
    this.dialog.open(DetailsModalComponent, {data: value})
  }

}
