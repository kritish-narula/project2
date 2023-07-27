import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit{
  ngOnInit(): void {
    
  }
  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, private toastr:ToastrService, private spinner:NgxSpinnerService) { }

  addcategory(): void {
    this.tutorialService.createcategory(this.tutorial).then(() => {
      console.log('Created new Category Successfully!');
    });
  }
  submit(){
    this.spinner.show()
    setTimeout(() => {
      this.toastr.success("Created new Category Successfully!")
      }, 3000);
      
  }
}
