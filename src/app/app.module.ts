import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RatingComponent } from './_component/rating/rating.component';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";


import "hammerjs";
import { SearchComponent } from './_component/Menu/search/search.component';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    SearchComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    InputsModule,
    GridModule,
    ChartsModule,
    PDFModule,
    ExcelModule,
    IndicatorsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
