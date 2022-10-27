import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import {MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { SignInComponent } from './signIn/signIn.component';
import { RegisterComponent } from './register/register.component';
import { StepperFormComponent } from './register/stepper-form/stepper-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    SignInComponent,
    RegisterComponent,
    StepperFormComponent,
    MovieListComponent,
    MovieCardComponent
    
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
    MatStepperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
