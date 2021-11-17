import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModalComponent } from './pages/modal/services-modal/services-modal.component';
import { PartnerWithUsComponent } from './pages/partner-with-us/partner-with-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TeamComponent } from './pages/team/team.component';
import { CareersModalComponent } from './pages/modal/careers-modal/careers-modal.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessServiceComponent } from './pages/business-service/business-service.component';
import { BusinessSubServiceComponent } from './pages/business-service/business-sub-service/business-sub-service.component';
import { DetailsModalComponent } from './pages/modal/details-modal/details-modal.component';
import { HumaneServiceComponent } from './pages/humane-service/humane-service.component';
import { HumaneSubServiceComponent } from './pages/humane-service/humane-sub-service/humane-sub-service.component';
import { HybridServiceComponent } from './pages/hybrid-service/hybrid-service.component';
import { TermsAndConditionsModalComponent } from './pages/modal/terms-and-conditions-modal/terms-and-conditions-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PromptModalComponent } from './pages/modal/prompt-modal/prompt-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    AboutUsComponent,
    ServicesModalComponent,
    PartnerWithUsComponent,
    FooterComponent,
    TeamComponent,
    CareersModalComponent,
    ServicesComponent,
    BusinessServiceComponent,
    BusinessSubServiceComponent,
    DetailsModalComponent,
    HumaneServiceComponent,
    HumaneSubServiceComponent,
    HybridServiceComponent,
    TermsAndConditionsModalComponent,
    PromptModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
