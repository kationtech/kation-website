import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptModalComponent } from './pages/modal/prompt-modal/prompt-modal.component';
import { environment } from '../environments/environment'
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  register(data: any) {
    const body = data;
    return this.http.post<any>(environment.api, body, {
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    });
  }

  showSpinner() {
    this.spinner.show();
  }

  closeSpinner() {
    this.spinner.hide();
  }


}
