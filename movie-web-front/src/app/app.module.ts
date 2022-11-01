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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { SignInComponent } from './signIn/signIn.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { RegisterComponent } from './register/register.component';
import { FormOneComponent } from './register/form-one/form-one.component';
import { FormTwoComponent } from './register/form-two/form-two.component';
import { FormThreeComponent } from './register/form-three/form-three.component';
import { RegisterRoutingModule } from './register/register-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    SignInComponent,
    MovieListComponent,
    MovieCardComponent,
    RegisterComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent
   
   
  
    
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
    RegisterRoutingModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
