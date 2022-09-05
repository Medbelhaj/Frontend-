import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Eleve } from '../model/eleve.model';
@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }
  getListeeleve(): Observable <Eleve[]>{
    return this.http.get(environment.api+'findAlleleve') as Observable<Eleve[]>;
  }
  createleve(eleve: Object): Observable<object>{
    return this.http.post(environment.api+'/addeleve', eleve);
  }
  geteleveId(id: number): Observable<any>{
    return this.http.get(environment.api+'/eleve/'+id);
  }
  Deleteeleve(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateeleve(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
