import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-business-service',
  templateUrl: './business-service.component.html',
  styleUrls: ['./business-service.component.scss']
})
export class BusinessServiceComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateTo(path: string){
    this.router.navigate([path]), { relativeTo: this.route }
  }

}
