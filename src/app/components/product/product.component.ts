import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { SharedSignalsService } from '../../shared/services/shared-signals.service';
import { CheckWindowsSiceService } from '../../shared/services/check-windows-sice.service';


@Component({
    selector: 'app-product',
    imports: [CommonModule, MaterialModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
    _sharedSignalsService = inject(SharedSignalsService);
    windowWidthSvc = inject(CheckWindowsSiceService);
    currentIndex: number = 0;

    /**
     * Detect changes in the device size
     */
    detectDevice = effect(() => {
        console.log('deviceType', this.windowWidthSvc.deviceTypeComputed());
    });

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
