import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  uid?:string
  name?:string
  email?:string | undefined | null 
  contact?:string
  address?:string
  status?:boolean
  userType?:string
}