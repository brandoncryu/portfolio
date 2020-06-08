import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs = [
    {id: 1, name: "Bouncy Balls", description: "Interactive web app written in javascript.", url: "/bouncy-balls"},
    {id: 2, name: "Project2", description: "Coming soon", url: "/blog-list"},
  ];

  products = [
    {
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue-stripe-stoneware-plate.jpg"
    },
    {
      title: "Hand Painted Blue Flat Dish",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      image: "hand-painted-blue-flat-dish.jpg"
    },
    {
      title: "Heme",
      brand: "Dust & Form",
      price: 52,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
      image: "heme.jpg"
    },
    {
      title: "Mashiko-Yaki Green Small Plate",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-green-small-plate.jpg"
    },
    {
      title: "Mashiko-Yaki Indigo Small Plate",
      brand: "Kiriko",
      price: 28,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-indigo-small-plate.jpg"
    },
    {
      title: "Mashiko-Yaki Saucer",
      brand: "Kiriko",
      price: 18,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "mashiko-yaki-saucer.jpg"
    }
  ]
  

  constructor() { }

  public getProducts():Array<{title, brand, price, description, image}>{
    return this.products;
  }

  public getBlogs():Array<{id, name, description, url}>{
    return this.blogs;
  }
}
