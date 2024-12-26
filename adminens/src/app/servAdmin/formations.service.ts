import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:9000/Formations';

  constructor(private http: HttpClient) {}

  addFormation(formation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddFormations` , formation)
  }
}
