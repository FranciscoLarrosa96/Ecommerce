import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, effect, inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';
import { ProductService } from '../product/product.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  animations: [
    trigger('fadeZoom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }), // Pequeño y opaco
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })) // Se agranda con fade
      ])
    ])
    
  ]
  
})
export class HomeComponent implements OnInit {
  private _sharedSignalsService = inject(SharedSignalsService);
  private _router = inject(Router);
  private productSvc = inject(ProductService);
  mouseHover: boolean[] = [];
  sideNavOpacity: string = '1';
  items: Product[] = [];
  filteredProducts: Product[] = [];

  // Variables para los filtros
  searchTerm: string = '';
  minPrice: number = 0;
  maxPrice: number = Infinity;
  minStars: number = 0;

  constructor() {

  }
  ngOnInit(): void {
    this.items = this.productSvc.getProducts();
    this.filteredProducts = [...this.items];
  }

  //TODO: Implementar la función applyFilters
  applyFilters() {

  }

  /**
  * Converts the variable to true if the mouse is hovered over the card
  * @param index 
  */
  showDescription(index: number) {
    this.mouseHover[index] = true;
  }
  /**
   * Converts the variable to false if the mouse leaves the card
   * @param index 
   */
  hiddenDescription(index: number) {
    this.mouseHover[index] = false;
  }

  goToProduct(product: Product) {
    this._sharedSignalsService.productSignal.set(product);
    this._router.navigate(['/product/' + product.id]);
  }

}
