import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private router:Router,private toastr:ToastrService,private spinner:NgxSpinnerService){

  }
  loginform = {
    email:'',
    password:'',
  }
  submit(){
    console.log(this.loginform)
    this.spinner.show()
    if(this.loginform.email == "kritish@gmail.com" && this.loginform.password == "123")
    {
      setTimeout(() => {
      console.log("Login Successfully")
      this.toastr.success("Login Successfully")
      this.router.navigateByUrl("/adminlayout/dashboard")
      }, 3000);
    }
    else{
      this.spinner.hide()
      console.log("Invalid email or password")
      this.toastr.error("Invalid Email or Password")
      this.router.navigateByUrl("/layout/home")
    }
  }

}
