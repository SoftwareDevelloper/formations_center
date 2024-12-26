import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionUsersService } from '../../servAdmin/gestion-users.service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  users = {
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
  constructor(private gestionuser:GestionUsersService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.users.email = params['email']; 
      console.log('User email for update:', this.users.email);
    });
  }
  onUpdateUser(email:any) {
    console.log('Attempting to update user with ID:',email);
    if (!email) {
      console.error('Error: User ID is missing.');
      return;
    }
    this.gestionuser.UpdateUser(this.users,email).subscribe({
      next: (response) => {
        console.log('User updated successfully:', response);
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error('Error updating user:', err);
      },
    });
  }
  
}
