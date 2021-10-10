import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BusinessServiceComponent } from './pages/business-service/business-service.component';
import { BusinessSubServiceComponent } from './pages/business-service/business-sub-service/business-sub-service.component';
import { LandingComponent } from './pages/landing/landing.component';
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
  path: 'businessapp/:subservice', 
  component: BusinessSubServiceComponent
},{
  path: '**', redirectTo: 'landing', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
