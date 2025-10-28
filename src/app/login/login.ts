import { Component } from '@angular/core';
import { User } from '../services/user';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
userform : FormGroup;
constructor(private usr:User, private fb:FormBuilder,private router: Router){
  let controls={
  email : new FormControl('',[Validators.email,Validators.required]),
  password : new FormControl('',Validators.required)
  }
  this.userform = this.fb.group(controls);
}
send()
{
this.usr.login(this.userform.value).subscribe
({
  next : (res : any)=>{console.log(res);
    if(res.Token)
    {localStorage.setItem('token',res.Token)
  this.router.navigate(['/home']);}
  
},
  error :(err)=>{console.log(err);}
}
)
}
}
