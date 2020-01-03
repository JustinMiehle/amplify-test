import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '@user/layout/footer/footer.component';
import { HeaderComponent } from '@user/layout/header/header.component';
import { UserRoutingModule } from '@user/user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule, NgbModule, TranslateModule],
  declarations: [UserComponent, HomeComponent, HeaderComponent, FooterComponent]
})
export class UserModule {}
