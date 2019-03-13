import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadOnScrollModule } from 'projects/load-on-scroll/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadOnScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
