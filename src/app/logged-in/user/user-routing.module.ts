import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard, extract } from '@app/core';
import { HomeComponent } from '@user/home/home.component';
import { UserComponent } from '@user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: extract('Home') }
      }
    ],
    canActivate: [AuthenticationGuard],
    data: {
      reuse: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
