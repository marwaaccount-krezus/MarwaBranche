import { Component, OnInit } from '@angular/core';
import { GetServiceService } from 'src/app/get-service.service';
import { Offre } from 'src/Model/Offre';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit {
   offre : Offre;

  constructor(private sce :GetServiceService) {
   }

  ngOnInit(): void {
    this.offre =new Offre;
  
  }
  btnClick= function () {
   console.log('ajout effectue avec succes');
   alert('ajout effectue avec succes');
};

save() {
  this.sce.postOffre(this.offre).subscribe();
 }
}
