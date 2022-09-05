import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../model/parent.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }
  getListeparent(): Observable<Parent[]>{
    return this.http.get(environment.api+'findAllParent') as Observable<Parent[]>;
  }
  creatparent(parent: Object): Observable<object>{
    return this.http.post(environment.api+'/addparent', parent);
  }
  getparentId(id: number): Observable<any>{
    return this.http.get(environment.api+'/parent/'+id);
  }
  Deleteparent(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateparent(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
