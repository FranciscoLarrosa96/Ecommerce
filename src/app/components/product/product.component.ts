import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { MercadoPagoComponent } from '../mercadopago/mercadopago.component';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';


@Component({
    selector: 'app-product',
    imports: [CommonModule, MaterialModule, MercadoPagoComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
    _sharedSignalsService = inject(SharedSignalsService);
    currentIndex: number = 0;
    constructor() { }


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
}
