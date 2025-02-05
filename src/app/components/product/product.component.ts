import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { MercadoPagoComponent } from '../mercadopago/mercadopago.component';


@Component({
    selector: 'app-product',
    imports: [CommonModule, MaterialModule, MercadoPagoComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent {

}
