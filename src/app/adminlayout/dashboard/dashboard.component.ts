import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Userlist } from 'src/app/models/userlist/userlist.model';
import { UserlistService } from 'src/app/shared/userlist/userlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  Userlist?:Userlist[];
  selectedFiles?: FileList;
  currentFileUpload?: Userlist;
  percentage = 0;
      
  form = {
    id:'',
    username: '',
    dateofbooking: '',
    productname: '',
    productstatus: '',
  }

  constructor(private userlistService: UserlistService) { }


  upload(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.allcategories();
  }
  allcategories(): void {
    this.userlistService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Userlist = data;
      console.log(this.Userlist)
    });
  }
}
