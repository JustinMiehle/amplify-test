import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { JobService } from '@services/job/job.service';
import { StaffService } from '@services/staff/staff.service';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  providers: [StaffService, JobService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
