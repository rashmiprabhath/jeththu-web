import {environment} from './../environments/environment';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JproductsService {

  constructor(private http: HttpClient) {
  }

  getName(): Observable<Product> {
    return this.http.get<Product>(environment.jeththu_url + 'products');
  }

}

export interface Product {

  name: string;

}
