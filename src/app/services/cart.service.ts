import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  detailproduit(produit: any) {
    this.items.push(produit);
  }

  getItems() {
    return this.items;
  }
  deleteform(item:any){
  this.items=this.items.filter((i)=>i.id!==item.id);
  }
  
}
