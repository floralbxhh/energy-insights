import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Co2FeatureForecastModule } from '@energy-insights/co2/feature-forecast';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, Co2FeatureForecastModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
