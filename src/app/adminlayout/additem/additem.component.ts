import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Manageitems } from 'src/app/models/manageitems/manageitems.model';
import { ManageitemsService } from 'src/app/shared/manageitems/manageitems.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  // manageitems: Manageitems = new Manageitems();
  selectedFiles?: FileList;
  currentFileUpload?: Manageitems;
  percentage = 0;
      
  form = {
    productname: '',
    image: '',
  }

  constructor(private manageitemservice: ManageitemsService, private Router: Router,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  upload(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit(): void {
    this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new Manageitems(file, this.form.productname, true);
        this.manageitemservice.pushFileToStorage(this.currentFileUpload).subscribe(
          result => {
            console.log(result)
            if (result == 100) {
              setTimeout(() => {
                this.toastr.success("Item created Successfully")
                this.spinner.hide()
              }, 3000);
            }
          },
          error => {
            this.spinner.hide()

            console.log(error);
          }
        );
      }
    }
}
}
