import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Register } from './register/register';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { List } from './list/list';
import { Add } from './add/add';
import { Update } from './update/update';
import { homeguardGuard } from './homeguard-guard';


export const routes: Routes = [
                               {path:'', redirectTo:'home', pathMatch:'full'},
                               {path : 'home',canActivate:[homeguardGuard], component : Home, children:
                                [
                                {path:'',redirectTo:'list',pathMatch:'full'},
                                {path:'list', component:List},
                                {path:'add', component: Add},
                                {path:'update/:id', component:Update}
                            ]},
                               {path : 'register' , component : Register},
                               {path : 'login' , component : Login},
                               {path : '**', component: NotFound}
                              
];
