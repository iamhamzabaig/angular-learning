import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnualFundComponent } from './Fees/annual-fund/annual-fund.component';
import { FeeElementComponent } from './Fees/fee-element/fee-element.component';
import { MonthlyTransactionComponent } from './Fees/monthly-transaction/monthly-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnualFundComponent,
    FeeElementComponent,
    MonthlyTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
