import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/shared/tutorial.service';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit{
  @Input() tutorial ?: Tutorial
  
  constructor(private activatedroute : ActivatedRoute,private router : Router,private tutorialservice : TutorialService,private toastr:ToastrService,private spinner:NgxSpinnerService){}

  ngOnInit(): void {
    // console.log(this.activatedroute.snapshot.paramMap.get("id"))
    this.singledata()
  }
  currentTutorial : Tutorial = {
    title:'',
    description:'',
    published:false
  }

  async singledata() {
    let snapshot = await this.tutorialservice.getSinglecategory(this.activatedroute.snapshot.paramMap.get("id")).pipe()
    snapshot.forEach(doc => {
      console.log("data", doc.data())
      let data = doc.data()
      this.currentTutorial.title = data?.title
      this.currentTutorial.description = data?.description
      this.currentTutorial.published = data?.published
    })
    // console.log("snapshot", snapshot.data())

  }

  updatecategory(){
    const newdata = {
      'title':this.currentTutorial.title,
      'description':this.currentTutorial.description,
    }
    // console.log(newdata)
    this.tutorialservice.updatecategory(this.activatedroute.snapshot.paramMap.get("id"),newdata)
    .then(result=>{
      this.spinner.show()
      setTimeout(() => {
        this.toastr.success("Category updated Successfully")
        }, 3000);
    })
    .catch(err=>{
      console.log(err)
    })
  }


}
