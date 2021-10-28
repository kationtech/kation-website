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
      type: '',
      industry: '',
      service: '',
      company_size: null,
      has_technology: false,
      technology_name: ''
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
      this.showSpecifyField = this.formValues['has_technology'] && this.formValues['has_technology'] === 'true';
    } else {
      this.formValues['current_technology'] = value.target.value;
    }
    
    this.validateForm();
  }

  validateForm(){
    let data = this.formValues;
    console.log(data);
    if (data['type'] && data['industry'] && data['service'] && data['company_size'] && data['has_technology']) {
      if (data['has_technology'] === 'true') {
        this.isDisabled = !data['technology_name'];
      } else {
        this.isDisabled = false;
      }
    } else {
      this.isDisabled = true;
    }
  }

}
