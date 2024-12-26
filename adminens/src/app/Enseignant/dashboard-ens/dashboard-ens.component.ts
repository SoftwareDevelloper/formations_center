import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../servAdmin/formations.service';
import { HeaderEnsComponent } from "../header-ens/header-ens.component";

@Component({
  selector: 'app-dashboard-ens',
  standalone: true,
  imports: [HeaderEnsComponent,
    CommonModule,
    FormsModule

  ],
  templateUrl: './dashboard-ens.component.html',
  styleUrl: './dashboard-ens.component.css'
})
export class DashboardENSComponent {
  formation = {
    title: '',
    description: '',
    prix: 0,
    duree: 0,
    typeFormation: '',
    imageUrl: null as File | null, 
  };

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private productService: ProductService) {}

  onImageSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.formation.imageUrl = file 
      };
      reader.readAsDataURL(file);
    }
  }

  addFormation() {
    const formData = new FormData();
    formData.append('title', this.formation.title);
    formData.append('description', this.formation.description);
    formData.append('prix', this.formation.prix.toString());
    formData.append('duree', this.formation.duree.toString());
    formData.append('typeFormation', this.formation.typeFormation);
    
    if (this.formation.imageUrl) {
      formData.append('image', this.formation.imageUrl); 
    }

    this.productService.addFormation(formData).subscribe(response => {
      console.log('Formation added successfully', response);
    });
  }
}

