import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs = [
    {id: 1, name: "Bouncy Balls", description: "Interactive web app written in javascript.", url: "/bouncy-balls"},
    {id: 2, name: "Project2", description: "Coming soon", url: "/blog-list"},
  ];

  constructor() { }

  public getBlogs():Array<{id, name, description, url}>{
    return this.blogs;
  }
}
