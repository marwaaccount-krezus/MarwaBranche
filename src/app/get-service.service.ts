import { Injectable } from '@angular/core';
import {Offre} from 'src/Model/Offre';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  url='http://api.fynd.com:8000/OffreGet';
  offre = Offre;

  constructor(private http : HttpClient) { }

  getOffre() : Observable <Offre[]> {
    return this.http.get<Offre[]>(this.url);
  }

  DeleteOffre(id) {
    return this.http.delete('http://api.fynd.com:8000/'+id+'/delete'); 

    }

    postOffre(o :Offre){
     return this.http.post('http://api.fynd.com:8000/AjoutOffre',o);
    }

    UpdateOffre(offre, id){
      this.offre= offre; 
      console.log(offre); 
       this.http.put('http://api.fynd.com:8000/api/'+id, this.offre).subscribe();
    }
  
}
