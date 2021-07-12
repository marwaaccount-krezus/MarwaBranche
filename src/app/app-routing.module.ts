import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AfficheOffresComponent } from './offre-home/Afficher/affiche-offres/affiche-offres.component';
import { AjouterOffreComponent } from './offre-home/ajouter-offre/ajouter-offre.component';
import { OffreHomeComponent } from './offre-home/offre-home.component';
import { PublicationsComponent } from './publications/publications.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'publications', component: PublicationsComponent},
  {path :'offres', component: OffreHomeComponent},
  {path :'AfficheOffre', component: AfficheOffresComponent},
  {path :'AjouterOffre', component: AjouterOffreComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
