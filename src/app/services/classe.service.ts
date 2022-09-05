import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Classe } from '../model/classe.model';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  
  constructor(private http: HttpClient) { }
  getListeclasse(): Observable <Classe[]>{
    return this.http.get(environment.api+'findAllclasse') as Observable<Classe[]>;
  }
  creatclasse(classe: Object): Observable<object>{
    return this.http.post(environment.api+'/addclasse', classe);
  }
  getclasseId(id: number): Observable<any>{
    return this.http.get(environment.api+'/classe/'+id);
  }
  Deleteclasse(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateclasse(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
