import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData  } from '@angular/common';

import { AppComponent } from './app.component';
import { MidichlorianPipe } from './pipes/midichlorian.pipe';
import localeNL from '@angular/common/locales/nl';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    MidichlorianPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
