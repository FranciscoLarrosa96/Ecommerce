
import { Component, effect, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercadoPagoComponent } from '../mercadopago/mercadopago.component';
import { Product } from '../../interfaces/product.interface';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';
import { MaterialModule } from '../../shared/material.module';
import { CheckWindowsSiceService } from '../../shared/services/check-windows-sice.service';
import { SnackBarService } from '../../shared/services/snackbar.service';

@Component({
    selector: 'app-cart',
    imports: [CommonModule, MercadoPagoComponent, MaterialModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
    codigoPostal: string = '';
    costoEnvio: number | null = null;
    precioTotal: number = 0;
    products = input<Product[]>([]);
    windowWidthSvc = inject(CheckWindowsSiceService);
    private _sharedSignalsService = inject(SharedSignalsService);
    private _snackBarSvc = inject(SnackBarService);

    constructor() {
    }

    /**
     * Detect changes in the device size
     */
    detectDevice = effect(() => {
        console.log('deviceType', this.windowWidthSvc.deviceTypeComputed());
    });

    ngOnInit(): void {
        this.loadCart();
    }

    loadCart() {
        // Cargar productos del carrito
        this._sharedSignalsService.cartComputed().forEach(element => {
            this.products().push(element);
        });
    }

    // Update quantity of product
    updateQuantity(item: Product, change: number) {
        if (item.quantity! + change > 0) {
            item.quantity! += change;
        }
        // Update cart and local storage
        this._sharedSignalsService.cartSignal.set(this.products());
        localStorage.setItem('cart', JSON.stringify(this.products()));
    }

    // Calcular precio total de todos los productos
    getTotal(): number {
        return this.products().reduce((acc, item) => acc + (item.unit_price * item.quantity!), 0);
    }


    // Remove product from cart
    removeFromCart(product: Product) {
        const index = this.products().indexOf(product);
        if (index > -1) {
            this.products().splice(index, 1);
        }
        // Update cart and local storage
        this._sharedSignalsService.cartSignal.set(this.products());
        localStorage.setItem('cart', JSON.stringify(this.products()));
        this._snackBarSvc.showMessage('Producto eliminado del carrito');
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

