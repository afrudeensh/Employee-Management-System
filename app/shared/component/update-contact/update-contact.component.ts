import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute,Params } from '@angular/router';
import { contact } from '../add-contact/contactmodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  public contactid!:number;
  public contactdata:contact ={} as contact;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param:Params)=>{
      this.contactid = param['id']
    })
    this.api.fetchdata(this.contactid).subscribe((data:contact)=>{
      this.contactdata = data;
      console.log(data)
    })
      
  }

  update(){
    this.api.update(this.contactdata,this.contactid).subscribe((data:contact)=>{
      alert("Data updated successfully!")
      this.router.navigate(["/contactlist"])
    })
  }

}
