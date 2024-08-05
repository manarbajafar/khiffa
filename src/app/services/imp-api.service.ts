import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpApiService {

  constructor(private http: HttpClient) { }

  get(api): Observable<any> {
    return this.http.get<any>(api);
  }

  post(api, data): Observable<any> {
    return this.http.post<any>(api, data);
  }

  put(api, data): Observable<any> {
    return this.http.put<any>(api, data);
  }

  delete(api) {
    return this.http.delete<any>(api);
  }

  getEmployees(pageNumber, pageSize): Observable<any> {
    const url = `https://reqres.in/api/users?page=${pageNumber}&per_page=${pageSize}`;

    return this.http.get<any>(url);
  }
}
