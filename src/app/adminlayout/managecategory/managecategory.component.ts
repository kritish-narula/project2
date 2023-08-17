import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/shared/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category/category.model';
import Swal from 'sweetalert2'
import { CategoryService } from 'src/app/shared/category/category.service';
@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit{
  categories?:Category[];
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.allcategories();
  }
  allcategories(): void {
    this.categoryservice.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    });
  }
}