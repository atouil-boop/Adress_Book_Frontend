import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from './services/user';


export const homeguardGuard: CanActivateFn = (route, state) => {

 
  return inject(User).loggedin() || (inject(Router).navigate(['/login']), false);
};
