import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User {
  url = 'http://127.0.0.1:3000/root/';
  constructor(private http:HttpClient){
  
 }
register(data :any)
  { return this.http.post(this.url+'login',data)}
login(data :any)
  { return this.http.post(this.url+'user',data)}
loggedin(){
  return !!localStorage.getItem('token'); 
}
getdatafromtoken(){
  let token = localStorage.getItem('token');
  if(token) {
    return JSON.parse(window.atob(token.split('.')[1]));
}
}
logout( ) {
  localStorage.removeItem('token');
  window.location.reload();
}
}
