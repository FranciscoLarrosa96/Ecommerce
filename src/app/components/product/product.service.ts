import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';



@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private items: Product[] = [
        {
            id: '1',
            img: 'assets/img/products/a620.webp',
            title: 'Mother Gigabyte A620 S2h Ddr5 Amd Am5 M.2 Pcie 4.0 Pcreg',
            description: '',
            unit_price: 193007,
            arrayImgs: [
                "assets/img/products/imgForProduct/a620/a620-0.webp",
                "assets/img/products/imgForProduct/a620/a620-1.webp",
                "assets/img/products/imgForProduct/a620/a620-2.webp",
                "assets/img/products/imgForProduct/a620/a620-3.webp",
            ],
            review: { stars: 4, description: 'asd' },
            quantity: 1
        },
        {
            id: '2',
            img: 'assets/img/products/a620m-k.webp',
            title: 'Mother A620M-K',
            description: '',
            unit_price: 1100000,
            review: { stars: 5, description: 'asd' },
            quantity: 1
        },
        {
            id: '3',
            img: 'assets/img/products/b650-a.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '4',
            img: 'assets/img/products/b650m-a.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '5',
            img: 'assets/img/products/b650m-h.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '6',
            img: 'assets/img/products/x670.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '7',
            img: 'assets/img/products/x670e.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        }
    ];

    getProducts(): Product[] {
        return this.items;
    }

    getFilteredProducts(search: string = '', minPrice: number = 0, maxPrice: number = Infinity, minStars: number = 0): Product[] {
        return this.items.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase()) &&
          product.unit_price >= minPrice &&
          product.unit_price <= maxPrice &&
          (product.review?.stars || 0) >= minStars
        );
      }
      
}
