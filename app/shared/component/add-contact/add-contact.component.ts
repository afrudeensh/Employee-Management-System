import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from './contactmodel';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})



export class AddContactComponent implements OnInit{
  contactForm:FormGroup|any;

  constructor(private formbuilder:FormBuilder,private router:Router,private api:ApiService){
    
  }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phonenumber:['',Validators.required],
      city:['',Validators.required]
    })

}
 


  submitcontact(data:contact){
    console.log(this.contactForm.value)
    this.api.addcontact(data).subscribe((res:any)=>{
      this.contactForm.reset();
      this.router.navigate(["/contactlist"])
    })
    console.log("contactForm is displayed!")
 
  }
  




}

