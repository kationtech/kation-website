import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.scss']
})
export class ServicesModalComponent implements OnInit {

  isDisabled: boolean = true;
  formValues:any;
  showSpecifyField: boolean = false;

  surveyFormGrp =  new FormGroup({
    type: new FormControl('', Validators.required),
    description: new FormControl('none'),
    industry: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    company_size: new FormControl('', Validators.required),
    has_technology: new FormControl('', Validators.required),
    current_technology: new FormControl('')
  });

  private destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    const current_tech_control = this.surveyFormGrp.get('current_technology');
    this.surveyFormGrp.get('has_technology')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if(value === 'true') {
        current_tech_control?.setValidators([Validators.required]);
      } else {
        current_tech_control?.clearValidators();
      }
      current_tech_control?.updateValueAndValidity();
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete(); 
  }

}
