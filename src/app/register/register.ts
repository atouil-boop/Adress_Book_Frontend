import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { User } from '../services/user';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-register',
  standalone : true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerform : FormGroup;
  constructor(private _register:User, private fb:FormBuilder, private router: Router){
    let registercontrols = {
      name : new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    }
    this.registerform = this.fb.group(registercontrols);
  }
send ()
{
this._register.register(this.registerform.value).subscribe
  ({
    next : (res)=>{this.router.navigate(['/login']);},
    error :(err)=>{console.log(err);}
  }
)


}
}
