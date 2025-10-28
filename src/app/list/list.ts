import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { User } from '../services/user';
import { Contact } from '../services/contact';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  table:any;
  constructor(private usr:User, private contact:Contact ){}
  ngOnInit(): void {
    this.usr.getdatafromtoken()._id;
    this.contact.byUser(this.usr.getdatafromtoken()._id).subscribe({
      next : (res : any)=>{console.log(res); this.table=res;},
      error :(err)=>{console.log(err);}
    })
  }
   Delete (contactId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This contact will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete
        this.contact.delcontact(contactId).subscribe(() => {
          // Update list locally
          this.table = this.table.filter((c:any) => c._id !== contactId);

          // Success message
          Swal.fire('Deleted!', 'The contact has been removed.', 'success');
        });
      }
    });
  }
}


