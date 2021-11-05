import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptModalComponent } from './pages/modal/prompt-modal/prompt-modal.component';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  register(data: any) {
    const body = data;
    this.http.post<any>(environment.api, body, {
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    }).subscribe(res => {
      console.log(res);
      const dialogRef = this.dialog.open(PromptModalComponent, {
        width: '500px'
      });
    });
  }


}
