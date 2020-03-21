import {environment} from './../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JproductsService {

  productUrl = 'products';

  constructor(private http: HttpClient) {
  }

  getName(): Observable<Product> {
    return this.http.get<Product>(environment.jeththu_url + this.productUrl);
  }

}

export interface Product {
  id: number
  name: string;

}
