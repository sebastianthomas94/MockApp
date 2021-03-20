import { Component, OnInit } from '@angular/core';
import { APIcomsService } from "../apicoms.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-single-mock-user',
  templateUrl: './single-mock-user.component.html',
  styleUrls: ['./single-mock-user.component.css']
})
export class SingleMockUserComponent implements OnInit {

  constructor(private apicoms: APIcomsService,private router: Router) { }
  
  id:Number;
  datas:any;
  singleData:any;
	data1:any;
  ngOnInit(): void {
	 
	  this.id=this.apicoms.checkID();
	  
	  this.apicoms.getData().subscribe(data=>{
      console.log(data);
      this.datas = data;
	  for( this.data1 of this.datas){
		if(this.data1.id==this.id)
		{
			this.singleData=this.data1;
			console.log(this.singleData);
		}} 
  });
  


  
  }

deleteUser(userID){
	if(confirm("Are you sure?"))
	{
		console.log("cliked delete ID:"+userID);

		this.apicoms.deleteData(userID).subscribe();
		alert("User deleted");
		this.router.navigateByUrl("/display");
	}
}

gotodisplay(){
		this.router.navigateByUrl("/display");
	}

gotocreate(){
	this.router.navigateByUrl("");
	
}


}
