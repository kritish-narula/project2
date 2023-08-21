import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { Manageitems } from 'src/app/models/manageitems/manageitems.model';


@Injectable({
  providedIn: 'root'
})
export class ManageitemsService {
  private path = "/categories"

  manageitems:AngularFirestoreCollection<Manageitems>

  constructor(private db:AngularFirestore,private storage : AngularFireStorage) { 
    this.manageitems = db.collection("/categories")
  }

  pushFileToStorage(manageitems : Manageitems):Observable<number | undefined>{
    const filePath = `${this.path}/`+Math.round(Math.random()*1E9)+`${manageitems.fileName?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, manageitems.fileName);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          // console.log("DATA",categories)
          let data: Manageitems = {
            imageUrl: downloadURL,
            productname : manageitems.productname,
            status : manageitems.status,
            // fileName: categories.fileName?.name
          }
          this.saveFileData(data);
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  updatepushFileToStorage(id:any,file:any,data:any){
    const filePath = `${this.path}/`+Math.round(Math.random()*1E9)+`${file?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath,file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          let mydata: Manageitems = {
            imageUrl: downloadURL,
            productname : data.productname,
          }
          this.update(id,mydata);
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  private saveFileData(manageitems: Manageitems): void {
    this.manageitems.add({ ...manageitems })
  }

  getAll():AngularFirestoreCollection<Manageitems>{
    return this.manageitems
  }
  
  getSingle(id:any){
    return this.manageitems.doc(id).get()
  }

  update(id:any,data:any){
    return this.manageitems.doc(id).update(data)
  }

  deleteitem(id: string): Promise<void> {
    return this.manageitems.doc(id).delete();
  }
  additem(manageitems : Manageitems): any {
    return this.manageitems.add({ ...manageitems });
  }


}
