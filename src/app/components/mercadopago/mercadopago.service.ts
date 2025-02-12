import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private _http = inject(HttpClient);
  constructor() { }


  getPreferenceId(body: { items: Product[], zip_code: string }) {
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    // Aquí deberías hacer una petición HTTP a tu backend para obtener el preferenceId
    return this._http.post(`${environment.API_MP}/crear-preferencia`, body, { headers });
  }
}



