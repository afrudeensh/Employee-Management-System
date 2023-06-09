import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contact } from './component/add-contact/contactmodel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 
  //post method
  addcontact(data: contact) {
    return this.http.post<contact>("http://localhost:3000/posts", data)
  }

  //get method
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/posts")
  }

  //delete method
  deletecontact(id:number){
    return this.http.delete<contact>("http://localhost:3000/posts/"+id)
  }

  //fetching data 

  fetchdata(id:number){
       return this.http.get<contact>("http://localhost:3000/posts/"+id)
  }

  //updating data

  update(data:contact,id:number){
      return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
  }


}
