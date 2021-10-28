import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil} from 'rxjs/operators'
import { UtilsService } from 'src/app/utils.service';
import { PromptModalComponent } from '../modal/prompt-modal/prompt-modal.component';
import { TermsAndConditionsModalComponent } from '../modal/terms-and-conditions-modal/terms-and-conditions-modal.component';

@Component({
  selector: 'app-partner-with-us',
  templateUrl: './partner-with-us.component.html',
  styleUrls: ['./partner-with-us.component.scss']
})
export class PartnerWithUsComponent implements OnInit {

  isPage: boolean = false;
  formValues: any;
  showSpecifyField: boolean = false;
  showFullForm: boolean = true;
  partnerFormGrp =  new FormGroup({
    type: new FormControl('', Validators.required),
    description: new FormControl(''),
    industry: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    company_size: new FormControl('', Validators.required),
    has_technology: new FormControl(false, Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contact_number: new FormControl('', Validators.required),
    subscription: new FormControl(false, Validators.required),
    recaptcha: new FormControl ('', Validators.required)
  });

  infoFormGrp = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contact_number: new FormControl('', Validators.required),
    subscription: new FormControl(''),
    terms: new FormControl('', Validators.required),
    recaptcha: new FormControl('', Validators.required)
  });

  siteKey: string = '6Lf_H-EcAAAAAFWKp2oyTXOJN2RYxgCnlIsCt0tI'
  destroy$ = new Subject();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private util: UtilsService
  ) {}

  ngOnInit(): void {
    this.isPage = this.router.url === '/partnerWithUs';

    const data = localStorage.getItem('data');

    if (data !== 'undefined') {
      this.showFullForm = false;
      this.prefillFullForm(data);
    } else {
      this.showFullForm = true;
    }
  }

  setFormControl(value: any) {
    if(value.value === 'true') {
      this.partnerFormGrp.addControl('current_technology', new FormControl('', Validators.required))
    }
  }

  prefillFullForm(data: any){
    let formValue = JSON.parse(data);
    this.partnerFormGrp.patchValue({
      company_size: formValue['company_size'],
      contact_number: "",
      description: "none",
      email: "",
      has_technology: formValue['has_technology'],
      industry: formValue['industry'],
      name: "",
      service: formValue['service'],
      subscription: false,
      type: formValue['type']
    });
  }

  showTermsAndConditions(){
    const dialogRef = this.dialog.open(TermsAndConditionsModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // SUBMIT API HERE
      console.log(result);

      localStorage.setItem('data', JSON.stringify(result))

    });
  }

  submitForm() {

    let finalData = {
      type: "",
      industry: "",
      service: "",
      company_size: 0,
      has_technology: false,
      current_technology: "",
      description: "none",
      name: "",
      email: "",
      contact_number: "",
      subscrtiption: false,
    }

    if (this.isPage) {
      finalData = {
        type: this.partnerFormGrp.value['type'],
        industry: this.partnerFormGrp.value['industry'],
        service: this.partnerFormGrp.value['service'],
        company_size: this.partnerFormGrp.value['company_size'],
        has_technology: this.partnerFormGrp.value['has_technology'],
        current_technology: this.partnerFormGrp.value['technology_name'],
        description: this.partnerFormGrp.value['description'],
        name: this.partnerFormGrp.value['name'],
        email: this.partnerFormGrp.value['email'],
        contact_number: this.partnerFormGrp.value['contact_number'],
        subscrtiption: this.partnerFormGrp.value['subscription'],
      }
      this.util.register(finalData)
    } else {
      finalData = {
        type: this.partnerFormGrp.value['type'],
        industry: this.partnerFormGrp.value['industry'],
        service: this.partnerFormGrp.value['service'],
        company_size: this.partnerFormGrp.value['company_size'],
        has_technology: this.partnerFormGrp.value['has_technology'],
        current_technology: this.partnerFormGrp.value['technology_name'],
        description: this.partnerFormGrp.value['description'],
        name: this.infoFormGrp.value['name'],
        email: this.infoFormGrp.value['email'],
        contact_number: this.infoFormGrp.value['contact_number'],
        subscrtiption: this.infoFormGrp.value['subscription'],
      }

      this.util.register(finalData)
    }
  }

  successModal(){
    const dialogRef = this.dialog.open(PromptModalComponent, {
      width: '600px'
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}


