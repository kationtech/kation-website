import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.scss']
})
export class ServicesModalComponent implements OnInit {

  isDisabled: boolean = true;
  formValues:any;
  showSpecifyField: boolean = false;

  constructor() {
    this.formValues = {
      type: null,
      industry: null,
      isServiceorProduct: null,
      companySize: null,
      technology: null,
      technologyType: null
    }
  }

  ngOnInit(): void {
  }

  getType(value: string){
    this.formValues['type'] = value;
    this.validateForm();
  }
  
  setValueForm(type: string, value: any){
    if(type === 'select') {
      this.formValues[value.source._id] = value.value;
      this.showSpecifyField = this.formValues['technology'] && this.formValues['technology'] === 'true';
    } else {
      this.formValues['technologyType'] = value.target.value;
    }
    
    this.validateForm();
  }

  validateForm(){
    let data = this.formValues;
    if (data['type'] && data['industry'] && data['isServiceorProduct'] && data['companySize'] && data['technology']) {
      if (data['technology'] === 'true') {
        this.isDisabled = !data['technologyType'];
      } else {
        this.isDisabled = false;
      }
    } else {
      this.isDisabled = true;
    }
  }

}
