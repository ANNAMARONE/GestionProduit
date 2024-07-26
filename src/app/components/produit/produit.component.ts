import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']  // Notez l'utilisation de styleUrls pour correspondre aux conventions Angular
})
export class ProduitComponent {
  cartService = inject(CartService);
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Panier de Fruits',
      description: 'Un assortiment de fruits frais locaux, comprenant des mangues, des bananes, et des ananas.',
      prix: 10.00,
      quantite: 15,
      image: 'https://www.lacueillettedeshalles.fr/pub/produits/paniers/.fruits_m.jpg',
    },
    {
      id: 2,
      nom: 'Vêtements Traditionnels',
      description: 'Vêtements traditionnels fabriqués à la main avec des tissus locaux colorés.',
      prix: 45.00,
      quantite: 8,
      image: 'https://images.playground.com/9628573743c54212b73df4ebb1d7f492.jpeg'
    },
    {
      id: 3,
      nom: 'Épices Artisanales',
      description: 'Un mélange d’épices artisanales locales pour donner du goût à vos plats.',
      prix: 5.00,
      quantite: 20,
      image: 'https://www.ounousa.com/wp-content/uploads/fly-images/270605/200514061008723-640x99999.jpg'
    },
    {
      id: 4,
      nom: 'Bijoux en Argent',
      description: 'Bijoux artisanaux en argent fabriqués par des artisans locaux, incluant des colliers et des bracelets.',
      prix: 30.00,
      quantite: 12,
      image: 'https://th.bing.com/th/id/R.070b86407e36ff9b9c2f74e10e52014f?rik=v1wP06VTkvv5hw&pid=ImgRaw&r=0'
    },
    {
      id: 5,
      nom: 'Artisanat en Bois',
      description: 'Objets en bois sculptés à la main, allant des décorations murales aux petites sculptures.',
      prix: 25.00,
      quantite: 10,
      image: 'https://2.bp.blogspot.com/-w5H5DWvvg64/TnC5OYQ6OII/AAAAAAAAAEc/MZtsOT12Bng/s1600/HPIM1777.JPG'
    },
    {
      id: 5,
      nom: 'Artisanat en Bois',
      description: 'Objets en bois sculptés à la main, allant des décorations murales aux petites sculptures.',
      prix: 25.00,
      quantite: 10,
      image: 'https://2.bp.blogspot.com/-w5H5DWvvg64/TnC5OYQ6OII/AAAAAAAAAEc/MZtsOT12Bng/s1600/HPIM1777.JPG'
    }
  ];

  trackById(index: number, produit: Produit): number {
    return produit.id;
  }

  detailproduit(produit: Produit): void {
    this.cartService.detailproduit(produit);
  }
}

export interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  quantite: number;
  image: string;
}
