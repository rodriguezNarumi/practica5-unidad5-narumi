import { Injectable } from '@angular/core';
import {Item} from '../modelos/item';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

   url:string = 'http://localhost:3000/items/';
   httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
    };
  
  items:Item[] = [

  //constructor(private http:HttpClientModule) { }

{
  
        id: 0,
        title: 'manzana',
        price: 20,
        quantity: 4,
        completed: false
      },
      {
        id: 0,
        title: 'leche',
        price: 20,
        quantity: 4,
        completed: true
      },
      {
        id: 0,
        title: 'leche',
        price: 20,
        quantity: 4,
        completed: true
      }
    ];
   
  
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  toggleCompleted(item:Item):Observable<any>{
    return this.http.put<Item>(this.url + item.id,item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  
}
