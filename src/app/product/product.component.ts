import { JproductsService } from './../jproducts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name : string;

  constructor(private jproductsService: JproductsService) { }

  ngOnInit() {
    this.initName();
  }

  initName(): void {
    this.jproductsService.getName()
      .subscribe( name => this.name = name );
  }

}
