import { Routes } from '@angular/router';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { AddadminComponent } from './Admin/addadmin/addadmin.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { UpdateUserComponent } from './Admin/update-user/update-user.component';
import { DashboardENSComponent } from './Enseignant/dashboard-ens/dashboard-ens.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent},
    { path: 'enseignant', component:DashboardENSComponent},
    //{ path: '**', redirectTo: 'login' },
    {path: 'createUser', component:AddUserComponent},
    {path:'update/:id' , component:UpdateUserComponent},
    {path:'createinternote', component:AddadminComponent}
];
