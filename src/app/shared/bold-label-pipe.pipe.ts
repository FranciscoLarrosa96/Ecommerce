import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldLabel'
})
export class BoldLabelPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    
    const parts = value.split(':');
    if (parts.length > 1) {
      return `<strong>${parts[0]}:</strong> ${parts.slice(1).join(':')}`;
    }
    
    return value;
  }
}
