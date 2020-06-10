import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/versionInfo');
  }
}
