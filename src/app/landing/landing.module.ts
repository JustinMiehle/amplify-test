import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { AboutComponent } from '@app/landing/about/about.component';
import { LoginComponent } from '@app/landing/login/login.component';
import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    NgbModule,
    CoreModule,
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent, HomeComponent, AboutComponent, LoginComponent, NotFoundComponent],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
