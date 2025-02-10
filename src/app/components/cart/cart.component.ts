
import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercadoPagoComponent } from '../mercadopago/mercadopago.component';
import { Product } from '../../interfaces/product.interface';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';

@Component({
    selector: 'app-cart',
    imports: [CommonModule, MercadoPagoComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
    codigoPostal: string = '';
    costoEnvio: number | null = null;
    precioTotal: number = 0;
    products = input<Product[]>([]);
    private _sharedSignalsService = inject(SharedSignalsService);
    constructor() {
        this.products().forEach((product:Product) => this.precioTotal += product.unit_price);
        console.log('precioTotal', this.precioTotal);
        
     }
    ngOnInit(): void {
        // Cargar productos del carrito
        this._sharedSignalsService.cartComputed().forEach(element => {
            this.products().push(element);
        });
    }

    // TODO: Para mas adelante
    // calcularEnvio() {
    //     if (!this.codigoPostal) {
    //         alert("Ingrese un código postal válido");
    //         return;
    //     }

    //     this.http.post<{ costo: number }>(`${environment.API_MP}/calcular-envio`, { codigoPostal: this.codigoPostal })
    //         .subscribe(
    //             {
    //                 next: response => this.costoEnvio = response.costo,
    //                 error: error => alert("Error al calcular el envío. Intente nuevamente.")
    //             }
    //         );
    // }
}

