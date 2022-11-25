import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SliderCarouselComponent } from './components/slider-carousel/slider-carousel.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { InformationSectionComponent } from './components/information-section/information-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementBarComponent,
    HeaderBarComponent,
    SliderCarouselComponent,
    CategoriesSectionComponent,
    ProductSectionComponent,
    InformationSectionComponent,
    FooterSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
