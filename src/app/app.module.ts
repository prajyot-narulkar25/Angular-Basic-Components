import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TimepickerComponent } from './timepicker/timepicker.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker'
import { FormsModule } from '../../node_modules/@angular/forms';
import { TableComponent } from './table/table.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccordionComponent,
    CarouselComponent,
    DatepickerComponent,
    ProgressbarComponent,
    TabsComponent,
    TimepickerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'accordion' , component: AccordionComponent},
      {path: 'carousel' , component: CarouselComponent},
      {path: 'datepicker' , component: DatepickerComponent},
      {path: 'progressbar' , component: ProgressbarComponent},
      {path: 'tabs' , component: TabsComponent},
      {path: 'timepicker' , component: TimepickerComponent},
      {path: 'table' , component: TableComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }