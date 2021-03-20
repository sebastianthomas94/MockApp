import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreateMockUserComponent } from './create-mock-user/create-mock-user.component';
import { DisplayMockUserComponent } from './display-mock-user/display-mock-user.component';
import { SingleMockUserComponent } from './single-mock-user/single-mock-user.component';

const routes: Routes = [
	{path: '', component: CreateMockUserComponent},
	{path: 'display', component: DisplayMockUserComponent},
	{path: 'single', component: SingleMockUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
