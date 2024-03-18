import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/api/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
  
}
