import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/Model/Offre';
import { GetServiceService} from '../../../get-service.service';


@Component({
  selector: 'app-affiche-offres',
  templateUrl: './affiche-offres.component.html',
  styleUrls: ['./affiche-offres.component.css']
})
export class AfficheOffresComponent implements OnInit {
  ListOffres : Offre[];
  offre :any= {
    id: '',
    description: '',
    pourcentage: '',
    article: '',
    libelle: '',
    datePub :'',
    validite:'',
  }
 
  constructor(private router: Router, private sce:GetServiceService) { }

  ngOnInit(): void {
   this.sce.getOffre().subscribe( (data :Offre[]) => this.ListOffres=data)
 
  }

  btnClick= function () {
    this.router.navigateByUrl('AjouterOffre');
};
  
SuppInscrit(id){
  this.sce.DeleteOffre(id).subscribe(  ()=> {
    this.ListOffres= this.ListOffres.filter
    (i=> i.id !=id)
  } );
}
ModifOffre(i){
  this.offre= i;
  console.log(this.offre.id+" melowel")
 }
Modification(){
  //console.log(this.inscrit.FirstName)
  console.log(this.offre.id+" mbaed")
  this.sce.UpdateOffre(this.offre, this.offre.id);
 }


 
}
