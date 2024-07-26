import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule,ProduitComponent],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {
cartService=inject(CartService);

deleteform(item: any){
  this.cartService.deleteform(item);
}
}
