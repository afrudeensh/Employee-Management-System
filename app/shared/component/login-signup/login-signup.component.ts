import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../add-contact/contactmodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}
  signupform!:FormGroup;
  loginform!:FormGroup;
  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })

    this.loginform = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })


      
  }
 isshow = false;

 signup(){
    this.isshow = true;
 }

 login(){
  this.isshow = false;
 }
 submitsignup(signup:any){
  this.http.post<signup>("http://localhost:3000/signup",this.signupform.value).subscribe(res=>{
    alert("User signup is done successfully!");
    this.signupform.reset();
  })    
 
}

loginuser(){
  this.http.get<login[]>("http://localhost:3000/signup").subscribe(res=>{
    //matching email and password

    const user = res.find((a:any)=>{
      return a.email === this.loginform.value.email && a.password === this.loginform.value.password
    })

    //check condition for login 

    if(user){
      alert("successfully logged in!");
      this.router.navigate(["/contactlist"])
      this.loginform.reset();
      //storing data in local storage
      localStorage.setItem('logindata',JSON.stringify(user))
    }else{
      alert("user not found with this credentials!")
    }

  },err=>{
    alert("something went wrong try after sometime")
  })
}
}
