import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import HttpService from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import UserService from "./services/user.service";
import { CategoryCardComponent } from './category-card/category-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import {MatIconModule} from "@angular/material/icon";
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { AddTransactionFormComponent } from './add-transaction-form/add-transaction-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { Page404Component } from './page404/page404.component';
import { WalletChartComponent } from './wallet-chart/wallet-chart.component';
import {ChartsModule} from "ng2-charts";
import { AboutTransactionComponent } from './about-transaction/about-transaction.component';
import { AllTransactionsPageComponent } from './all-transactions-page/all-transactions-page.component';
import {MatListModule} from "@angular/material/list";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    CategoryCardComponent,
    CardsContainerComponent,
    WalletPageComponent,
    AddCategoryFormComponent,
    AddTransactionFormComponent,
    Page404Component,
    WalletChartComponent,
    AboutTransactionComponent,
    AllTransactionsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatListModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    InfiniteScrollModule
  ],
  providers: [HttpService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
