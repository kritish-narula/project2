import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private dbpath = "/users"

  userRef: AngularFirestoreCollection<User>

  constructor(public afauth: AngularFireAuth, private router: Router, private db: AngularFirestore) {
    this.userRef = this.db.collection(this.dbpath)
  }

  //register with email/Password
  SignUp(form: any) {
    // this.spinner.show()
    return this.afauth.createUserWithEmailAndPassword(form.email, form.password)
      .then((result) => {
        let userdata: User = {
          uid: result.user?.uid,
          email: result.user?.email,
          contact: form.contact,
          address: form.address,
          name: form.name,
          userType: 'Customer',
          status: true
        }
        this.userregister(userdata)
        // this.spinner.hide()
        // this.toastr.success('You have been successfully registered!')
        console.log('You have been successfully registered!');
        this.router.navigateByUrl("/login")
      })
      .catch((error) => {
        // this.spinner.hide()
        // this.toastr.error(error.message)
        console.log(error.message)
      })
  }

  private userregister(user: User) {
    return this.userRef.add({ ...user })
  }
  userId :any
   //Login with email/Password
   SignIn(form: any) {
    // this.spinner.show()
    return this.afauth.signInWithEmailAndPassword(form.email, form.password)
      .then((result) => {
        // console.log(result)
        this.userId = result.user?.uid
        localStorage.setItem("uid",this.userId)
        localStorage.setItem("isauth","true")
        console.log('You have been successfully login!');
        this.router.navigateByUrl("/manage-tutorial")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

    //Google Auth
    GoogleAuth() {
      return this.AuthLogin(new GoogleAuthProvider())
    }
  
    AuthLogin(provider: any) {
      return this.afauth.signInWithPopup(provider)
        .then((result) => {
          // window.alert('You have been successfully logged in!');
          console.log(result);
          let userdata: User = {
            uid: result.user?.uid,
            email: result.user?.email,
            userType: 'Customer',
            status: true
          }
          this.userregister(userdata)
  
          this.userId = result.user?.uid
          localStorage.setItem('uid', this.userId)
          localStorage.setItem('isauthenticated', 'true')
  
          console.log('You have been successfully registered!')
          this.router.navigateByUrl("/add-tutorial")
        })
        .catch((error) => {
          window.alert(error.message)
        })
    }
    getAllUser():AngularFirestoreCollection<User>{
      return this.userRef
    }
    getUserByUid(uid:any){
      return this.db.collection(this.dbpath,ref=>ref.where("uid","==",uid))
    }
}