import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit{
  tutorials?: Tutorial[];
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.allcategories();
  }
  allcategories(): void {
    this.tutorialService.getAllcategories().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
      console.log(this.tutorials)
    });
  }

  deletecategory(id:any){
    // alert(id)
    // this.tutorialservice.delete(id)
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch((err)=>
    // console.log(err))

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tutorialService.deletecategory(id)
        .then((data)=>{
            // console.log(data)
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        })
        .catch((err)=>
        console.log(err))
        
      }
    })
  }
}
