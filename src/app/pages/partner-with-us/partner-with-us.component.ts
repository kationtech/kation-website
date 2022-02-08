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
    this.isPage = this.router.url === '/partnerWithUs';
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
      contact_number: this.partnerFormGrp.value['contact_number'],
      email: this.partnerFormGrp.value['email'],
      name: this.partnerFormGrp.value['name'],
      subscription: this.partnerFormGrp.value['subscription']
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


