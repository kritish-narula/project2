import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { ManageitemsService } from 'src/app/shared/manageitems/manageitems.service';
import { Manageitems } from 'src/app/models/manageitems/manageitems.model';
@Component({
  selector: 'app-manageitem',
  templateUrl: './manageitem.component.html',
  styleUrls: ['./manageitem.component.css']
})
export class ManageitemComponent implements OnInit{
  manageitems?:Manageitems[] 

  constructor(private manageitemsService: ManageitemsService) { }

  // savemanageitems(): void {
  //   this.manageitemsService.create(this.manageitems).then(() => {
  //     console.log('Created new item successfully!');
  //   });
  // }
  form = {
    productname: '',
    price: '',
    imageUrl:'',
    category:''
  } 

  ngOnInit(): void {
    this.allitems();
    this.retrievemanageitems();
  }

  retrievemanageitems(): void {
    this.manageitemsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.manageitems = data;
    });
  }
  allitems(): void {
    this.manageitemsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.manageitems = data;
      console.log(this.manageitems)
    });
  }
  

  deleteitem(id:any){
    // alert(id)
    // this.manageitemsservice.delete(id)
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
        this.manageitemsService.deleteitem(id)
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
