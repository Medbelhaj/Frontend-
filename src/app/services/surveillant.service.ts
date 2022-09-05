import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Surveillant } from '../model/surveillant.model';
@Injectable({
  providedIn: 'root'
})
export class SurveillantService {

  constructor(private http: HttpClient) { }
  getListesurveillant(): Observable<Surveillant[]>{
    return this.http.get(environment.api+'findAllsurveillant') as Observable<Surveillant[]>;
  }
  creatsurveillant(surveillant: Object): Observable<object>{
    return this.http.post(environment.api+'/addsurveillant', surveillant);
  }
  getsurveillantId(id: number): Observable<any>{
    return this.http.get(environment.api+'/surveillant/'+id);
  }
  Deletesurveillant(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updatesurveillant(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
