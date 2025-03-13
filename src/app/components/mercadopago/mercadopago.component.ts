// import { Component, inject, input, OnInit, signal } from '@angular/core';
// import { MercadoPagoService } from './mercadopago.service';
// import { Product } from '../../interfaces/product.interface';


// declare var MercadoPago: any;

// const mp = new MercadoPago('APP_USR-deec67f8-e6ae-4d88-aadd-b8b8c32a27ef', {
//   locale: 'es-AR', // Ajusta el idioma y la región según tu necesidad
// });

// @Component({
//   selector: 'app-mercado-pago',
//   templateUrl: './mercadopago.component.html',
//   styles: []
// })
// export class MercadoPagoComponent implements OnInit {
//   private mercadoPagoService = inject(MercadoPagoService);
//   products = input<Product[]>([]);
//   precioTotal = input<number>(0);
//   zipCode = input<string>('');
//   constructor() { }

//   ngOnInit(): void {
//     this.initMercadoPago();
//   }

//   initMercadoPago() {

//     const body = {
//       items: this.products(), // Tu array de productos en el carrito
//       zip_code: this.zipCode(), // Código postal ingresado por el usuario
//     }
//     // Llamar al backend para obtener el preferenceId
//     // Aquí deberías hacer una petición HTTP a tu backend para obtener el preferenceId
//     this.mercadoPagoService.getPreferenceId(body)
//       .subscribe({
//         next: (response: any) => {
//           this.createCheckoutButton(response.id);
//         }
//       });
//   }

//   createCheckoutButton(preferenceId: string) {

//     mp.bricks().create("wallet", "wallet_container", {
//       initialization: {
//         preferenceId: preferenceId,
//         redirectMode: "modal"
//       },
//       customization: {
//         texts: {
//           valueProp: 'smart_option',
//         },
//       },
//       // TODO: Falta agregar feedback luego de la compra
//       callbacks: {
//         onReady: () => {
//           console.log('Checkout is ready');
//         },
//         onSubmit: () => {
//           console.log('Checkout is submitting');
//         },
//         onError: (error:any) => console.error(error),
//       },
//     });

//   }
// }
