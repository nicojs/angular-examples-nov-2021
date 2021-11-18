import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData  } from '@angular/common';

import { AppComponent } from './app.component';
import { MidichlorianPipe } from './pipes/midichlorian.pipe';
import localeNL from '@angular/common/locales/nl';
import { HttpClientModule } from '@angular/common/http';
import { JediMasterPipe } from './pipes/jedi-master.pipe';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { BACKEND_URL } from './tokens';
import { environment } from 'src/environments/environment';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    { provide: BACKEND_URL, useValue: environment.backendUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
