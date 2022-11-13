import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatSelectModule} from '@angular/material/select';

//components 
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormOneComponent } from './register/form-one/form-one.component';
import { FormThreeComponent } from './register/form-three/form-three.component';
import { FormTwoComponent } from './register/form-two/form-two.component';
import { SignInComponent } from './signIn/signIn.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

 
 
 
  
];

@NgModule({
  declarations: [
    SignInComponent,
    MovieListComponent,
    MovieDetailsComponent,
    RegisterComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,

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
    YouTubePlayerModule,
    MatSelectModule

    
  ],
 
})
export class PagesModule {}
