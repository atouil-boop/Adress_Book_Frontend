import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../services/user';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
data : any = {};
usr=inject(User);
ngOnInit(): void {
 this.data=this.usr.getdatafromtoken();
 console.log(this.data);
}
logout( ){
  this.usr.logout();
}
}
