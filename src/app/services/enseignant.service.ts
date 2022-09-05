import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant.model';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }
  getListeemploi(): Observable <Enseignant[]>{
    return this.http.get(environment.api+'findAllemploi') as Observable<Enseignant[]>;
  }
  createmploi(emploi: Object): Observable<object>{
    return this.http.post(environment.api+'/addemploi', emploi);
  }
  getemploiId(id: number): Observable<any>{
    return this.http.get(environment.api+'/emploi/'+id);
  }
  Deleteemploi(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateemploi(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
