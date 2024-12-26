import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {
  private apiUrl = 'http://localhost:9000/Apprenant';
  private url = 'http://localhost:9000/Internote'
  constructor(private http : HttpClient) { }

  GetAllUser(): Observable<any>{
    return this.http.get(`${this.apiUrl}/GetAllApprenantDTO`);
  }
  AddUser(user:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/AddApprenant` , user)
    
  }
  DeleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/DeleteApprenant/${id}`,id)
  }
  UpdateUser(user: any, email: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateApprenantbyemail/${email}`, user);
  }
  GetAllinternote():Observable<any>{
    return this.http.get(`${this.url}/GetAllInternoteDTO`);
  }
  DeleteInternote(id:any):Observable<any>{
    return this.http.delete(`${this.url}/DeleteInternote/${id}`,id)
  }
  AddInternote(internotes:any):Observable<any>{
    return this.http.post(`${this.url}/AddInternote` , internotes)

  }
}
