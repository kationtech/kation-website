import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-humane-sub-service',
  templateUrl: './humane-sub-service.component.html',
  styleUrls: ['./humane-sub-service.component.scss']
})
export class HumaneSubServiceComponent implements OnInit {

  subService = [{
    service: "sales",
    title: "Sales Coach App",
    desc: "Manage your marketing campaigns more efficiently and build stronger relationships between your sales team and your customers with the Sales Coach App. This solution is designed specifically for field sales, helping you manage your sales force through call management, agent portal, expense tracking, product monitoring, sales coverage report, attendance and leave management. We can also help you enhance the design and interface of this app to best suit your needs. Nurture your sales from lead to order, monitor marketing lists and campaigns, and  get real-time reports anytime, anywhere. "
  }, {
    service: "kiosk",
    title: "KiosKart App",
    desc: "Manage your business more efficiently with KIOSKart,  the enterprise-grade POS and store management solution for your business. KIOSKart Terminal App can help you track your sales and inventory online or offline, handle actual product orders, deliveries, returns and damaged goods, enable staff attendance and timekeeping, manage cash, deposits, and reimbursement, and receive employee and user feedback."
  }, {
    service: "moo",
    title: "MOO Central App",
    desc: "Power up your business with Moo Central App. Bring traffic back to your stores through meaningful, individualized marketing on email and chat. Get to know your customers better through smart analytics from all your online customer transactions. This platform can help you interact directly with your customers to increase sales and brand loyalty for online experience up to the return to the new in-store experience."
  }];

  page: string = '';
  data: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.page = this.route.snapshot.params['subservice'];
    this.data = this.filterData();
  }

  filterData(){
    switch (this.page) {
      case 'sales':
        return this.subService[0];
        break;
      case 'kioskart':
        return this.subService[1];
        break;
      default:
        return this.subService[2];
        break;
    }
  }

}
