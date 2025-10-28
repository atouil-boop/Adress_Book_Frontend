import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  url = 'http://127.0.0.1:3000/root/';
  constructor(private http:HttpClient){
  
 }
create(data :any)
  { return this.http.post(this.url+'contact',data)}
byUser(id :any)
  { return this.http.get(this.url+'contacts/'+ id)}
bycontact(id :any)
  { return this.http.get(this.url+'contact/'+ id)}
delcontact(id :any)
{ return this.http.delete(this.url+'contact/'+ id)}
  updcontact(id :any, data:any)
{ return this.http.put(this.url+'contact/'+ id,data)}
}
