import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { first } from 'rxjs';
import { User } from '../services/user';
import { Contact } from '../services/contact';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
   image:any;
  selectimage(event:any)
  {
    this.image = event.target.files[0];
  }
  
  contactform : FormGroup;
  constructor(private fb:FormBuilder, private usr:User, private contact:Contact,private router:Router){
    let controls={
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      tel : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
      adress : new FormControl('',Validators.required), 
  }
  this.contactform = this.fb.group(controls);
}
send()
{
  this.usr.getdatafromtoken()._id;
  let fd=new FormData();
  fd.append('firstname',this.contactform.value.firstname);
  fd.append('lastname',this.contactform.value.lastname);
  fd.append('email',this.contactform.value.email);
  fd.append('tel',this.contactform.value.tel);
  fd.append('adress',this.contactform.value.adress);
  fd.append('image',this.image);
  fd.append('idUser',this.usr.getdatafromtoken()._id);
  this.contact.create(fd).pipe(first()).subscribe({
    next : (res : any)=>{console.log(res); this.router.navigate(['/home']);
    },
    error :(err)=>{console.log(err);}
  })


}
}