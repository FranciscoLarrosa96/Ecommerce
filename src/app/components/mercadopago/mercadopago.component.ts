import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MercadoPagoService } from './mercadopago.service';
import { Product } from '../../interfaces/product.interface';


declare var MercadoPago: any;

const mp = new MercadoPago('TEST-e5a29134-d5f2-43e1-92eb-1358ded6d7f6', {
  locale: 'es-AR', // Ajusta el idioma y la región según tu necesidad
});

@Component({
  selector: 'app-mercado-pago',
  templateUrl: './mercadopago.component.html',
  styles: []
})
export class MercadoPagoComponent implements OnInit {
  private mercadoPagoService = inject(MercadoPagoService);
  products = input<Product[]>([]);
  precioTotal = input<number>(0);
  zipCode = input<string>('');
  constructor() { }

  ngOnInit(): void {
    this.initMercadoPago();
  }

  initMercadoPago() {

    const body = {
      items: this.products(), // Tu array de productos en el carrito
      zip_code: this.zipCode(), // Código postal ingresado por el usuario
    }
    // Llamar al backend para obtener el preferenceId
    // Aquí deberías hacer una petición HTTP a tu backend para obtener el preferenceId
    this.mercadoPagoService.getPreferenceId(body)
      .subscribe({
        next: (response: any) => {
          this.createCheckoutButton(response.id);
        }
      });
  }

  createCheckoutButton(preferenceId: string) {

    const bricksBuilder = mp.bricks();


    bricksBuilder.create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId,
        redirectMode: "modal",
      },
      customization: {
        texts: {
          valueProp: 'smart_option',
        },
      },
    });

  }
}
