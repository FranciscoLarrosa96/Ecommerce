import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckWindowsSiceService {

  private deviceTypeSingal = signal<string>('');
  deviceTypeComputed = computed(() => this.deviceTypeSingal());

  constructor() {
    this.updateDeviceType();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this.updateDeviceType();
  }

  private updateDeviceType() {
    const width = window.innerWidth;
    let newDeviceType = '';

    if (width <= 320) {
      newDeviceType = 'mobile-s';
    } else if (width <= 375) {
      newDeviceType = 'mobile-m';
    } else if (width <= 425) {
      newDeviceType = 'mobile-l';
    } else if (width < 768) {
      newDeviceType = 'mobile';
    } else if (width < 1024) {
      newDeviceType = 'tablet';
    } else {
      newDeviceType = 'desktop';
    }

    if (this.deviceTypeSingal() !== newDeviceType) {
      this.deviceTypeSingal.set(newDeviceType);
    }
  }
}
