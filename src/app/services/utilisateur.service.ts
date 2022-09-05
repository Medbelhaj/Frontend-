import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../model/utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  getListeutilisateur(): Observable<Utilisateur[]>{
    return this.http.get(environment.api+'findAllutilisateur') as Observable<Utilisateur[]>;
  }
  creatutilisateur(utilisateur: Object): Observable<object>{
    return this.http.post(environment.api+'/addutilisateur', utilisateur);
  }
  getutilisateurId(id: number): Observable<any>{
    return this.http.get(environment.api+'/utilisateur/'+id);
  }
  Deleteutilisateur(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateutilisateur(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
