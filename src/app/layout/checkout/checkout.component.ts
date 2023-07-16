import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  ngOnInit(): void {
    
  }
  checkoutform={
    fname:'',
    lname:''
  }
  constructor(private router:Router,private spinner:NgxSpinnerService,private toastr:ToastrService){}
  submit(){
    // console.log(this.loginform.value.email)
    // console.log(this.loginform.value.password)
    this.spinner.show()
    if(this.checkoutform.fname == "" && this.checkoutform.lname == "")
    {

      setTimeout(() => {
        this.spinner.hide()
        this.toastr.success("Order has been placed Successfully")
        
      }, 4000);
    }
    else{
      setTimeout(() => {
        this.spinner.hide()
      }, 3000);
    }
  }

}
