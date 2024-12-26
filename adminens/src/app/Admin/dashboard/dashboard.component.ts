import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestionUsersService } from '../../servAdmin/gestion-users.service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users = [
    { id:'' ,nom: '', prenom: '', niveau: '' },

    
  ];
  internotes = [
    {id:'',login:'',role:''},
  ]
  user = {
    id: '',
    nom: '',
    prenom: '',
    niveau: '',
    adresse:'',
    email:'',
    telephone:'',
    password:'',
    confirmPassword:'',
  };
  constructor(private gestionuser:GestionUsersService, private router: Router) {}
  ngOnInit(): void {
    this.GetAllApprenant();
    this.GetAllInternote();
  }
  
  GetAllApprenant(): void {
    this.gestionuser.GetAllUser().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Fetched users:', this.users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
  onAddUser() {
    this.gestionuser.AddUser(this.users).subscribe({
      next: (response) => {
        console.log('User added successfully', response);
        this.GetAllApprenant();
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
    
  }

  onUpdateUser() {
    this.router.navigate(['/update' , this.user.id ]);
    //this.router.navigate(['/update']);
  }

  onDeleteUser(id: any) {
    console.log('Attempting to delete user with ID:', id); 
    this.gestionuser.DeleteUser(id).subscribe({
      next: (response) => {
        console.log('User deleted successfully', response);
        this.GetAllApprenant();
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }
 
//delete internote
  onDelete(id: any) {
    console.log('Attempting to delete user with ID:', id); 
    this.gestionuser.DeleteInternote(id).subscribe({
      next: (response) => {
        console.log('internote deleted successfully', response);
        this.GetAllInternote();
      },
      error: (err) => {
        console.error('Error deleting internote:', err);
      }
    });
  }

  GetAllInternote(): void {
    this.gestionuser.GetAllinternote().subscribe({
      next: (data) => {
        this.internotes = data;
        console.log('Fetched internote:', this.internotes);
      },
      error: (err) => {
        console.error('Error fetching internote:', err);
      }
    });
  }
  
  onnavigate(){
    this.router.navigate(['/createUser']);
  }
  onnavigate2(){
    this.router.navigate(['/createinternote']);
  }
}
