import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BusinessServiceComponent } from './pages/business-service/business-service.component';
import { BusinessSubServiceComponent } from './pages/business-service/business-sub-service/business-sub-service.component';
import { CareersComponent } from './pages/careers/careers.component';
import { HumaneServiceComponent } from './pages/humane-service/humane-service.component';
import { HumaneSubServiceComponent } from './pages/humane-service/humane-sub-service/humane-sub-service.component';
import { HybridServiceComponent } from './pages/hybrid-service/hybrid-service.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PartnerWithUsComponent } from './pages/partner-with-us/partner-with-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [{
  path: '', component: LandingComponent, pathMatch: 'full'
}, {
  path: 'aboutus', component: AboutUsComponent
},{
  path: 'team', component: TeamComponent
},{
  path: 'services', component: ServicesComponent
},{
  path: 'businessapp', 
  component: BusinessServiceComponent,
},{
  path: 'businessapp/:id', 
  component: BusinessServiceComponent,
},{
  path: 'businessapp/subservice/:type', 
  component: BusinessSubServiceComponent
},{
  path: 'partnership', 
  component: HumaneServiceComponent,
},{
  path: 'humaneapp/:subservice', 
  component: HumaneSubServiceComponent
},{
  path: 'partnerWithUs',
  component: PartnerWithUsComponent
},{
  path: 'partnerWithUs/:page',
  component: PartnerWithUsComponent
},{
  path: 'design', 
  component: HybridServiceComponent
},{
  path: 'careers',
  component: CareersComponent
},{
  path: '**', redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
