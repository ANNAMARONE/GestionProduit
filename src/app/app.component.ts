import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProduitComponent,DetailProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionProduit';
}
