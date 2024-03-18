import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from './models/ProductRepresentation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  base_url = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<Array<ProductRepresentation>>(this.base_url);
  }
}
