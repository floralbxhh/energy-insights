import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { CO2ForecastStore } from '@energy-insights/co2/data-access';

@Component({
  selector: 'ngr-forecast',
  template: `<p>Forecast</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [CO2ForecastStore],
})
export class CO2ForecastContainer {}

@NgModule({
  declarations: [CO2ForecastContainer],
  exports: [CO2ForecastContainer],
  imports: [CommonModule],
})
export class CO2ForecastContainerModule {}
