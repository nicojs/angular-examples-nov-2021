import { LOCALE_ID, NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData  } from '@angular/common';

import { AppComponent } from './app.component';
import { MidichlorianPipe } from './pipes/midichlorian.pipe';
import localeNL from '@angular/common/locales/nl';
import { JediMasterPipe } from './pipes/jedi-master.pipe';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { JediListComponent } from './jedi-list/jedi-list.component';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    MidichlorianPipe,
    JediMasterPipe,
    AddJediComponent,
    JediListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
