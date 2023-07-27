import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Tutorial } from '../models/tutorial.model';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/tutorials';

  tutorialsRef: AngularFirestoreCollection<Tutorial>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  createitem(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  createcategory(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  getAllitems(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  getAllcategories(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  getSingleitem(id: any) {
    return this.tutorialsRef.doc(id).get()
  } 

  getSinglecategory(id: any) {
    return this.tutorialsRef.doc(id).get()
  } 
  
  updatecategory(id: any, data: any) {
    return this.tutorialsRef.doc(id).update(data)
  }
  
  updateitem(id: any, data: any) {
    return this.tutorialsRef.doc(id).update(data)
  }

  deletecategory(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }

  deleteitem(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }

}
