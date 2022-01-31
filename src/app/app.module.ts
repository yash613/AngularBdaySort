import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableChildComponent } from './table-child/table-child.component';
import { BtnChildComponent } from './btn-child/btn-child.component';
import { HttpClientModule } from '@angular/common/http';
import { SortingCallService } from './sorting-call.service';

@NgModule({
  declarations: [
    AppComponent,
    TableChildComponent,
    BtnChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SortingCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
