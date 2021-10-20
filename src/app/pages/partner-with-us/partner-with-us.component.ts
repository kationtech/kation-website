import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil} from 'rxjs/operators'
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
    has_technology: new FormControl(Boolean(false), Validators.required),
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
    subscription: new FormControl('', Validators.required),
    terms: new FormControl(''),
    recaptcha: new FormControl('', Validators.required)
  });

  siteKey: string = '6Lf_H-EcAAAAAFWKp2oyTXOJN2RYxgCnlIsCt0tI'
  destroy$ = new Subject();

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isPage = this.router.url === '/partnerWithUs';
    
    if (eval(localStorage['data'])) {
      this.showFullForm = false;
      this.prefillFullForm(localStorage['data']);
    } else {
      this.showFullForm = true;
    }

    this.partnerFormGrp.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {
      if(value.has_technology === 'true') {
        this.partnerFormGrp.addControl('technology_name', new FormControl('', Validators.required))
      }
    });

  }

  prefillFullForm(data: any){
    console.log(data);
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


