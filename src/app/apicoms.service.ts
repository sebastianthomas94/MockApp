import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class APIcomsService {

  constructor(private http: HttpClient) { }
  
  id:Number;
  
  addUser(MockUser){
	  console.log("reached service");
    return this.http.post("https://dev.digisuvidhacentre.com/Profile/api/MockUser", MockUser);
  }
  
  getData(){
	  
    return this.http.get("https://dev.digisuvidhacentre.com/Profile/api/MockUser");
  }
  
    deleteData(userID)
  {
	  console.log("service delete data:"+userID);
	  console.log("https://dev.digisuvidhacentre.com/Profile/api/MockUser/Delete/"+userID);
	  return this.http.delete("https://dev.digisuvidhacentre.com/Profile/api/MockUser/Delete/"+userID);
	  
  }
  
  selectedID(id){
	  this.id=id;
  }
  
  checkID(){
	  return this.id;
  }
  
}
