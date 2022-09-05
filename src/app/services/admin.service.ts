import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getListeadmin(): Observable <Admin[]>{
    return this.http.get(environment.api+'findAlladmin') as Observable<Admin[]>;
  }
  creatadmin(admin: Object): Observable<object>{
    return this.http.post(environment.api+'/addadmin', admin);
  }
  getadminId(id: number): Observable<any>{
    return this.http.get(environment.api+'/admin/'+id);
  }
  Deleteadmin(id:number): Observable<any>{
    return this.http.delete(environment.api+'/delete/'+id, { responseType: 'text'});
  }
  updateadmin(id: number): Observable<any>{
    return this.http.put(environment.api+'/update/'+id, { ResponseType:'text'} );
  }
}
