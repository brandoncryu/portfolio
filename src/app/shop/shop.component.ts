import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public products;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();

  }

}
