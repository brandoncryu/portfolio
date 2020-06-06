import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", url: "/bouncy-balls"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", url: "/home"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", url: "/home"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", url: "/home"}
  ];

  constructor() { }

  public getBlogs():Array<{id, name, description, url}>{
    return this.blogs;
  }
}
