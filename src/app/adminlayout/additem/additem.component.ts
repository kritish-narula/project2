import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  ngOnInit(): void {
    
  }
  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, private toastr:ToastrService, private spinner:NgxSpinnerService) { }

  additem(): void {
    this.tutorialService.createitem(this.tutorial).then(() => {
      
    setTimeout(() => {
      this.spinner.show()
      this.toastr.success('Created new item Successfully!')
      }, 3000);
    });
  }
  submit(){
    // this.spinner.show()
    // setTimeout(() => {
    //   this.toastr.success('Created new item Successfully!')
    //   }, 3000);
      
  }
}
