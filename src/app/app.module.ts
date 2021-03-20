import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { APIcomsService } from "./apicoms.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMockUserComponent } from './create-mock-user/create-mock-user.component';
import { DisplayMockUserComponent } from './display-mock-user/display-mock-user.component';
import { SingleMockUserComponent } from './single-mock-user/single-mock-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMockUserComponent,
    DisplayMockUserComponent,
    SingleMockUserComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [APIcomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
