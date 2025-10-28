import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { first } from 'rxjs';
import { User } from '../services/user';
import { Contact } from '../services/contact';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
 image:any;
 id:String="";
  selectimage(event:any)
  {
    this.image = event.target.files[0];
  }
  
  contactform : FormGroup;
  constructor(private fb:FormBuilder, private usr:User, private contact:Contact,private router:Router, private route:ActivatedRoute){
    let controls={
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      tel : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
      adress : new FormControl('',Validators.required), 
  }
  this.contactform = this.fb.group(controls);
}
ngOnInit():void{
   this.id=this.route.snapshot.params['id'];
  this.contact.bycontact(this.id).subscribe( {
    next : (res : any)=>{console.log(res); this.contactform.reset(res);},
    error :(err)=>{console.log(err);}
  })
}
update()
{
  let fd=new FormData();
  fd.append('firstname',this.contactform.value.firstname);
  fd.append('lastname',this.contactform.value.lastname);
  fd.append('email',this.contactform.value.email);
  fd.append('tel',this.contactform.value.tel);
  fd.append('adress',this.contactform.value.adress);
  if(this.image)
  {
  fd.append('image',this.image);
  }
  this.contact.updcontact(this.id,fd).pipe(first()).subscribe({
    next : (res : any)=>{console.log(res); this.router.navigate(['/home']);
    },
    error :(err)=>{console.log(err);}
  })


}
}
