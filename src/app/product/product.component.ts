import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:number=1;
  stockStatus:string='Yes';
  constructor() { }

  ngOnInit(): void {
  }

}
