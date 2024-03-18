import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/api/product/product.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  result:any[]=[];
  constructor(private service : ProductService) {}

  ngOnInit(): void {
      this.service.getProduct().subscribe({
        next:(data_cat)=>{
          this.result = data_cat;
          console.log(data_cat)
        }
      })
  }
}
