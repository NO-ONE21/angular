import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  localData: any;
  constructor(private router:Router,private localStorage:LocalService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
 
  ngOnInit(): void {
  }
  
  
  onSubmitfn(){
    this.localData=this.localStorage.getData('user');
    // console.log(`Local Storage ${this.localData}`);
    if( this.loginForm.username === this.localData.username  && this.loginForm.password === this.localData.password){
      console.log("VALIDATE")
      // console.log(this.loginForm.valid);//Not validate
      // console.log(`This is in Validate${this.loginForm.value}`)
      alert("Welcome!!")
    this.router.navigate(['/dashboard'])
      return;
    }else
    console.log("NOT VALIDATE");
    alert("Not Validate")
    // console.log(`This is in Not-Validate${this.loginForm.value}`)
    
  }
}
