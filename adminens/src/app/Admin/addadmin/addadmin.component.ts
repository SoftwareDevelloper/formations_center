import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionUsersService } from '../../servAdmin/gestion-users.service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-addadmin',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HeaderComponent
],
  templateUrl: './addadmin.component.html',
  styleUrl: './addadmin.component.css'
})
export class AddadminComponent {
  internotes = {id:'',login:'',password:'',role:'',};
  constructor(private gestionuser:GestionUsersService, private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
    const internoteId = this.route.snapshot.paramMap.get('id');
    if (internoteId) {
      this.internotes.id = internoteId;
      this.onAddInternote();
    } else {
      console.error('No user ID provided in route');
    }
  }

  onAddInternote() {
    this.gestionuser.AddInternote(this.internotes).subscribe({
      next: (response) => {
        console.log('internote added successfully', response);
        this.router.navigate(['/admin']);
        //this.GetAllApprenant();
      },
      error: (err) => {
        console.error('Error adding internote:', err);
      }
    });
    
  }

}
