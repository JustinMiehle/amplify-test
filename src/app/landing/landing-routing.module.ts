import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: extract('Home') } },
      { path: 'about', component: AboutComponent, data: { title: extract('About') } },
      { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
      { path: '404', component: NotFoundComponent, data: { title: extract('404 - Not Found') } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LandingRoutingModule {}
