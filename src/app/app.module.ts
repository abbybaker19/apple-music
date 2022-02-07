import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SignInComponent } from './navigation/signin.component';
import { CategoryCardComponent } from './browse/category.card.component';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './navigation/sidenavbar.component';
import { CategoryCarouselComponent } from './browse/category.carousel.component';
import { VerticalCardComponent } from './browse/vertical.card.component';
import { HorizontalCardComponent } from './browse/horizontal.card.component';

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
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
