import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedSignalsService {

  collapsedSidenavSignal = signal(false);
  collapsedSidenavComputed = computed(() => this.collapsedSidenavSignal());
  productSignal = signal<Product>({ id: '', img: '', title: '', unit_price: 0 });
  productComputed = computed<Product>(() => this.productSignal());
  constructor() { }
}
