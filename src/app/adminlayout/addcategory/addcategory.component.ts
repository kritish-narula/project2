import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/shared/category/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category/category.model';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit{
  tutorial: Tutorial = new Tutorial();
  selectedFiles?: FileList;
  currentFileUpload?: Category;
  percentage = 0;
      
  form = {
    categoryName: '',
    image: '',
  }

  constructor(private categoryService: CategoryService, private Router: Router,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  upload(event: any): void {
    this.selectedFiles = event.target.files;
  }

  submit() {
    this.spinner.show()
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new Category(file, this.form.categoryName, true);
        this.categoryService.pushFileToStorage(this.currentFileUpload).subscribe(
          result => {
            console.log(result)
            if (result == 100) {
              setTimeout(() => {
                this.toastr.success("Category created Successfully")
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
