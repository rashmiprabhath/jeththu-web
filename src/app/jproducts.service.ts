import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JproductsService {

  constructor() { }

  getName(): string {
    return "jeththu-products";
  }

}
