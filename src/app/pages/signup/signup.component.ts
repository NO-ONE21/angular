import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup | any;
  constructor(private router:Router, private localStorage:LocalService) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[!@#$%^&*_=+-])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,16}$'
      )])
    });
  }

  ngOnInit(): void {
  }
  onSubmitfn(){
    if(this.loginForm.valid){
      console.log("VALIDATE")
      console.log(this.loginForm.valid);//Not validate
      this.localStorage.saveData('user',JSON.stringify(this.loginForm.value))
      console.log(this.loginForm.value)
    this.router.navigate(['/signin'])
      return;
    }else
    console.log("NOT VALIDATE");
    
  }
}
