import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { SignInComponent } from './pages/signIn/signIn.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieCardComponent } from './pages/movie-list/movie-card/movie-card.component';
import { FormOneComponent } from './pages/register/form-one/form-one.component';
import { FormTwoComponent } from './pages/register/form-two/form-two.component';
import { FormThreeComponent } from './pages/register/form-three/form-three.component';

import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
    
   
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    HttpClientModule,
    InfiniteScrollModule,

    PagesModule,
    CoreModule,
    SharedModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
