import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIcomsService } from "../apicoms.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-mock-user',
  templateUrl: './create-mock-user.component.html',
  styleUrls: ['./create-mock-user.component.css']
})
export class CreateMockUserComponent implements OnInit {
	
	registerForm: FormGroup;
  MockUser = { UserName :'', Email:'', Phone:'', Gender:'', Age:Number}; 


  constructor(private formBuilder: FormBuilder, private apicoms: APIcomsService, private router: Router) { }

  ngOnInit(): void {
	  
	  this.registerForm = this.formBuilder.group({
 
      Email: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      Phone: [null, Validators.compose([Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)])],
      Gender: [null, Validators.compose([Validators.required, Validators.pattern(/^M$|^F$|^m$|^f$/)])],
      UserName: [null, Validators.required],
      Age: [null, Validators.required]
    });
  }


	addMockUser(){
		console.log(this.registerForm.value);
		/* if (this.registerForm.valid){ */
			/* this.apicoms.checkUsernameEmail(this.user).subscribe(data=>{
				if(data['found']==true) this.alert = true;
        else { */
			this.apicoms.addUser(this.MockUser).subscribe();
			console.log("reached addMockuser()"+this.MockUser);
			console.log(this.MockUser);
			alert("User data added!");
			location.reload(); 
        /* } */
      /* } */
    }
	
	
	gotodisplay(){
		this.router.navigateByUrl("/display");
	}
	
}
