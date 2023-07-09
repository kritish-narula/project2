import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutform={
    fname:'',
    lname:''
  }
  constructor(private router:Router,private spinner:NgxSpinnerService){}
  submit(){
    // console.log(this.loginform.value.email)
    // console.log(this.loginform.value.password)
    this.spinner.show()
    if(this.checkoutform.fname == "kritish" && this.checkoutform.lname == "narula")
    {

      setTimeout(() => {
        this.spinner.hide()
      }, 4000);
    }
    else{
      setTimeout(() => {
        this.spinner.hide()
      }, 3000);
    }
  }

}
