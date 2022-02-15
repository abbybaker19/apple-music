import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/browse/topnavbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignInComponent } from './browse/signin.component';
import { CategoryCardComponent } from './browse/category.card.component';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './browse/sidenavbar.component';
import { CategoryCarouselComponent } from './browse/category.carousel.component';
import { VerticalCardComponent } from './browse/vertical.card.component';
import { HorizontalCardComponent } from './browse/horizontal.card.component';
import { AppRoutingModule } from './app-routing.module';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';
import { JoniPlaylistComponent } from './browse/joni-layout/joni-layout.component';
import { AlistPopPlaylistComponent } from './browse/alist-pop-layout/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './browse/rb-now-layout.component';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
