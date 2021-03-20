import { Component, OnInit } from '@angular/core';
import { APIcomsService } from "../apicoms.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-display-mock-user',
  templateUrl: './display-mock-user.component.html',
  styleUrls: ['./display-mock-user.component.css']
})
export class DisplayMockUserComponent implements OnInit {

  constructor(private apicoms: APIcomsService,private router: Router) { }
  
	datas:any;


  ngOnInit(): void {
	  
	  this.apicoms.getData().subscribe(data=>{
      console.log(data);
      this.datas = data;
  });

}

deleteUser(userID){
	if(confirm("Are you sure?"))
	{
	
		console.log("cliked delete ID:"+userID);

		this.apicoms.deleteData(userID).subscribe();
		alert("User deleted");
		location.reload(); 
	}
}

clicked(id){
	this.apicoms.selectedID(id);
	this.router.navigateByUrl("/single");
}
}