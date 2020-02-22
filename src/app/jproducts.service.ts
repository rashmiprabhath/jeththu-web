import {environment} from './../environments/environment.prod';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JproductsService {

  constructor() {
  }

  getName(): Observable<string> {
    return of('jeththu-products');
  }

}
