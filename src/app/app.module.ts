import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';

// import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductListingComponent } from './productlisting/productlisting.component';
import { CartService } from './services/cart.service';
import { RouterModule, Routes } from '@angular/router';
import { MiddlesectionComponent } from './middlesection/middlesection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MiddlesectionComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'aboutsection', component: AboutsectionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productlisting', component: ProductListingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginpageComponent,
    FooterComponent,
    AboutsectionComponent,
    GalleryComponent,
    ContactComponent,
    CartComponent,
    ProductListingComponent,
    MiddlesectionComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
