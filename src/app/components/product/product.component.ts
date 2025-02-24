import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';
import { CheckWindowsSiceService } from '../../shared/services/check-windows-sice.service';
import { Product } from '../../interfaces/product.interface';
import { NavigationEnd, Router } from '@angular/router';
import { BoldLabelPipe } from '../../shared/bold-label-pipe.pipe';
import { SnackBarService } from '../../shared/services/snackbar.service';


@Component({
    selector: 'app-product',
    imports: [CommonModule, MaterialModule, BoldLabelPipe],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
    _sharedSignalsService = inject(SharedSignalsService);
    windowWidthSvc = inject(CheckWindowsSiceService);
    currentIndex: number = 0;
    zoomScale = 1; // Escala inicial
    zoomOrigin = 'center'; // Punto de origen del zoom
    private _router = inject(Router);
    private _snackbarService = inject(SnackBarService);
    
    /**
     * Detect changes in the device size
     */
    detectDevice = effect(() => {
        console.log('deviceType', this.windowWidthSvc.deviceTypeComputed());
    });

    constructor() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }


    onMouseMove(event: MouseEvent, index: number) {
        if (this.currentIndex !== index) return; // Aplica zoom solo a la imagen activa
      
        const { offsetX, offsetY, target } = event;
        const { clientWidth, clientHeight } = target as HTMLImageElement;
      
        // Calcula la posición en porcentaje para el transform-origin
        const x = (offsetX / clientWidth) * 100;
        const y = (offsetY / clientHeight) * 100;
      
        this.zoomOrigin = `${x}% ${y}%`;
        this.zoomScale = 3; // Ajusta el nivel de zoom según lo necesites
      }
      
      resetZoom() {
        this.zoomScale = 1;
        this.zoomOrigin = 'center';
      }


    ngOnInit(): void {
        this.checkProduct();
    }

    // Chequeo si el producto existe si se recarga la página
    checkProduct() {
        if (this._sharedSignalsService.productComputed().id !== '') {
            localStorage.setItem('product', JSON.stringify(this._sharedSignalsService.productComputed()));
        } else {
            this._sharedSignalsService.productSignal.set(JSON.parse(localStorage.getItem('product') as any));
        }
    }


    prevImage() {
        this.currentIndex = (this.currentIndex === 0) ? this._sharedSignalsService.productComputed().arrayImgs!.length - 1 : this.currentIndex - 1;
    }

    nextImage() {
        this.currentIndex = (this.currentIndex === this._sharedSignalsService.productComputed().arrayImgs!.length - 1) ? 0 : this.currentIndex + 1;
    }

    goToImage(index: number) {
        this.currentIndex = index;
    }


    // Agregar al carrito el producto
    addToCart() {
        let cart: any = localStorage.getItem('cart');
        // verificar si el producto ya está en el carrito
        if (cart) {
            cart = JSON.parse(cart);
            let index = cart.findIndex((product: Product) => product.id === this._sharedSignalsService.productComputed().id);
            if (index !== -1) {
                cart[index].quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                cart.push(this._sharedSignalsService.productComputed());
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        } else {
            localStorage.setItem('cart', JSON.stringify([this._sharedSignalsService.productComputed()]));
        }
        this._sharedSignalsService.cartSignal.set(JSON.parse(localStorage.getItem('cart') as any));

        this._snackbarService.showMessage('Agregado al carrito');
    }
}
