import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LabelsService } from './services/labels.service';
import { ContactBoxComponent } from './components/contact-box/contact-box.component';
import { CmaClassPageComponent } from './components/cma-class-page/cma-class-page.component';
import { FinancialServicesPageComponent } from './components/financial-services-page/financial-services-page.component';
import { AboutRockyPageComponent } from './components/about-rocky-page/about-rocky-page.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomePageComponent, data: {title: 'Home'}},
  { path: 'CMA Classes', component: CmaClassPageComponent, data: {title: 'CMA Classes'}},
  { path: 'Financial Services', component: FinancialServicesPageComponent, data: {title: 'Financial Services'}},
  { path: 'About Rocky', component: AboutRockyPageComponent, data: {title: 'About Rocky'}},
  { path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ContactBoxComponent,
    CmaClassPageComponent,
    FinancialServicesPageComponent,
    AboutRockyPageComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    BrowserModule
  ],
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
