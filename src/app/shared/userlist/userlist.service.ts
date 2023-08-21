import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { Userlist } from 'src/app/models/userlist/userlist.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  private path = "/userlist"

  userlistRef:AngularFirestoreCollection<Userlist>

  constructor(private db:AngularFirestore,private storage : AngularFireStorage) { 
    this.userlistRef = db.collection("/userlist")
  }

  pushFileToStorage(userlist : Userlist):Observable<number | undefined>{
    const filePath = `${this.path}/`+Math.round(Math.random()*1E9)+`${userlist.productname?.toUpperCase}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, userlist.productname);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          // console.log("DATA",userlist)
          let data: Userlist = {
            username : userlist.username,
            dateofbooking :userlist.dateofbooking,
            productname: userlist.productname,
            productstatus : userlist.productstatus,
            // fileName: userlist.fileName?.name
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
          let mydata: Userlist = {
            username : data.username,
            dateofbooking: data.dateofbooking,
            productname:data.productname,
            productstatus:data.productstatus
          }
          this.update(id,mydata);
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  private saveFileData(userlist: Userlist): void {
    this.userlistRef.add({ ...userlist })
  }

  getAll():AngularFirestoreCollection<Userlist>{
    return this.userlistRef
  }
  
  getSingle(id:any){
    return this.userlistRef.doc(id).get()
  }

  update(id:any,data:any){
    return this.userlistRef.doc(id).update(data)
  }

}
