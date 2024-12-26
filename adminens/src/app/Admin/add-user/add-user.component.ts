import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionUsersService } from '../../servAdmin/gestion-users.service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule

  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
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
  constructor(private gestionuser:GestionUsersService, private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Get user ID from route and fetch user details
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.users.id = userId;
      this.onAddUser();
    } else {
      console.error('No user ID provided in route');
    }
  }

  onAddUser() {
    this.gestionuser.AddUser(this.users).subscribe({
      next: (response) => {
        console.log('User added successfully', response);
        this.router.navigate(['/admin']);
        //this.GetAllApprenant();
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
    
  }
}
