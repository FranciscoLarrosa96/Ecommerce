import { Component, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckWindowsSiceService } from './shared/services/check-windows-sice.service';
import { CommonModule } from '@angular/common';
import { SharedSignalsService } from './shared/services/shared-signals.service';
import { animationsCustom } from './animations';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login';
import {  HelperService } from './shared/helpers/helper.service';
import { FooterComponent } from './shared/footer/footer.component';
import { Product } from './interfaces/product.interface';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, ReactiveFormsModule, CommonModule, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: animationsCustom,
  providers: [HelperService]
})
export class AppComponent {
  title = 'Zona Tecno';
  switchTheme = new FormControl(false);
  darkMode = signal(false);
  collapsed = signal(false);
  withSidenav: string = '143px';
  withSidenavContent: string = '0px';
  cart: Product[] = [];
  deviceType = inject(CheckWindowsSiceService);
  private sharedSignalSvc = inject(SharedSignalsService);
  private _matDialog = inject(MatDialog);
  private _router = inject(Router);
  private _helperSvc = inject(HelperService);

  /**
 * Detect changes in the device size
 */
  deviceTypeChange = effect(() => {
    if (this.collapsed()) {
      this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed());
      this.withSidenav = '143px';
    } else {
      this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed());
      this.withSidenav = '0px';
    }
  });

  // Detect changes in the cart
  cartChange = effect(() => {
    this.cart = this.sharedSignalSvc.cartComputed();
    if(this.cart === undefined || this.cart === null) {
      this.cart = [];
    }
  });


  constructor() {
    // Obtener cart de localStorage
      this.sharedSignalSvc.cartSignal.set(JSON.parse(localStorage.getItem('cart') as any));
  }

  /**
   * Cuando clickeo dentro del content cierro el sidenav
   */
  clickOnContent() {
    if (this.collapsed()) {
      this.collapsed.set(!this.collapsed());
    }
  }


  /**
   * Open Login component
   */
  openLogin() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/profile']);
    } else {
      this._matDialog.open(LoginComponent, {
        panelClass: 'login-dialog',
        data: { name: 'Login' }
      });
      this._helperSvc.fixErrorFocus();
    }
  }

  /**
   * open cart
   */
  openCart() {
    this._router.navigate(['/cart']);
  }

}
