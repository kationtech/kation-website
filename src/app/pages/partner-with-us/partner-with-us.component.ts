import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  forCareer: boolean = false;
  formValues: any;
  showSpecifyField: boolean = false;
  showFullForm: boolean = true;
  acceptedTerms: boolean = false;

  captcha: string = '';

  partnerFormGrp =  new FormGroup({
    type: new FormControl(''),
    description: new FormControl(''),
    industry: new FormControl(''),
    service: new FormControl(''),
    company_size: new FormControl(''),
    has_technology: new FormControl(false),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
    contact_number: new FormControl('', Validators.required),
    subscription: new FormControl(false),
    termsAndConditon: new FormControl(null, Validators.required),
    recaptcha: new FormControl ('', Validators.required)
  });

  destroy$ = new Subject();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private util: UtilsService,
  ) {}

  ngOnInit(): void {
    this.forCareer = this.router.url.split('/')[2] ? true : false;

    this.isPage = this.router.url === '/partnerWithUs' || this.forCareer;

    const data = localStorage.getItem('data');
    if (!data || data === 'undefined' || data == '""') {
      if(this.forCareer) {
        this.partnerFormGrp.get('industry')?.setValue('inquiry');
        this.partnerFormGrp.get('type')?.disabled;
      } else {
        this.partnerFormGrp.get('type')?.setValidators([Validators.required]);
        this.partnerFormGrp.get('industry')?.setValidators([Validators.required]);
        this.partnerFormGrp.get('company_size')?.setValidators([Validators.required]);
        this.partnerFormGrp.get('has_technology')?.setValidators([Validators.required]);
      }
      
      this.showFullForm = true;
    } else {
      this.showFullForm = false;
      this.prefillFullForm(data);
    }
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    this.partnerFormGrp.get('recaptcha')?.setValue(this.captcha)
  }

  resetValidator(event: any){
    if(!event.checked) {
      this.partnerFormGrp.get('termsAndConditon')?.setValue(null);
    }
  }
 
  setFormControl(value: any) {
    if(value.value === 'true') {
      this.partnerFormGrp.addControl('current_technology', new FormControl('', Validators.required))
    }
  }

  prefillFullForm(data: any){
    let formValue = JSON.parse(data);
    if(this.forCareer) {
      this.partnerFormGrp.patchValue({
        company_size: "",
        contact_number: "",
        description: "none",
        email: "",
        has_technology: false,
        industry: "inquiry",
        name: "",
        service: "",
        subscription: false,
        type: "customer"
      });
    } else {
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

    console.log(this.partnerFormGrp);
  }

  showTermsAndConditions(){
    const dialogRef = this.dialog.open(TermsAndConditionsModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.acceptedTerms = true;
      }
    });
  }

  submitForm() {

    let finalData = {
      company_size: this.partnerFormGrp.value['company_size'],
      contact_number: this.partnerFormGrp.value['contact_number'],
      description: this.partnerFormGrp.value['description'] ? this.partnerFormGrp.value['description'] : "none",
      email: this.partnerFormGrp.value['email'],
      has_technology: JSON.parse(this.partnerFormGrp.value['has_technology']),
      current_technology: this.partnerFormGrp.value['current_technology'],
      industry: this.partnerFormGrp.value['industry'],
      name: this.partnerFormGrp.value['name'],
      service: this.partnerFormGrp.value['service'],
      subscription: this.partnerFormGrp.value['subscription'],
      type: this.partnerFormGrp.value['type']
    }

    this.util.showSpinner();
    this.util.register(finalData).pipe(takeUntil(this.destroy$)).subscribe(value => {
      if(value['status'] === 201) {
        this.util.closeSpinner();
        this.successModal();
        localStorage.clear();
        this.partnerFormGrp.reset();
      }
    }, error => {
      this.util.closeSpinner();
      console.log(error)
    })
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


