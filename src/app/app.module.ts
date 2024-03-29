import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar/topnavbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignInComponent } from './navigation/signin/signin.component';
import { CategoryCardComponent } from './browse/carousel-cards/category.card.component';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './navigation/sidenavbar/sidenavbar.component';
import { CategoryCarouselComponent } from './browse/carousel-cards/category.carousel.component';
import { VerticalCardComponent } from './browse/carousel-cards/vertical.card.component';
import { HorizontalCardComponent } from './browse/carousel-cards/horizontal.card.component';
import { AppRoutingModule } from './app-routing.module';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';
import { JoniPlaylistComponent } from './browse/joni-layout/joni-layout.component';
import { AlistPopPlaylistComponent } from './browse/alist-pop-layout/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './browse/rb-now-layout/rb-now-layout.component';
import { ListenNowComponent } from './browse/listen-now-layout.component';
import { RadioComponent } from './browse/radio-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    FooterComponent,
    SignInComponent,
    CategoryCardComponent,
    CategoryCarouselComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    NeilYoungPlaylistComponent,
    HomeLayoutComponent,
    JoniPlaylistComponent,
    AlistPopPlaylistComponent,
    RBNowPlaylistComponent,
    ListenNowComponent,
    RadioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
