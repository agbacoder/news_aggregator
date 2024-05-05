import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AlertComponent } from './components/alert/alert.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { FavComponent } from './pages/fav/fav.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // AlertComponent,/
    HompageComponent,
    FavComponent,
    SigninComponent,
    NotfoundComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    InfiniteScrollModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
