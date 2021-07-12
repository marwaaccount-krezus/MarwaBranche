import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecetteHomeComponent } from './recette-home/recette-home.component';
import { InfluenceurHomeComponent } from './influenceur-home/influenceur-home.component';
import { OffreHomeComponent } from './offre-home/offre-home.component';
import { EvenementHomeComponent } from './evenement-home/evenement-home.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderheaderComponent } from './sliderheader/sliderheader.component';
import { PublicationsComponent } from './publications/publications.component';
import { BanniereInterneComponent } from './banniere-interne/banniere-interne.component';
import { AfficheOffresComponent } from './offre-home/Afficher/affiche-offres/affiche-offres.component';
import { AjouterOffreComponent } from './offre-home/ajouter-offre/ajouter-offre.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    RecetteHomeComponent,
    InfluenceurHomeComponent,
    OffreHomeComponent,
    EvenementHomeComponent,
    ContactHomeComponent,
    NavbarComponent,
    SliderheaderComponent,
    PublicationsComponent,
    BanniereInterneComponent,
    AfficheOffresComponent,
    AjouterOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
