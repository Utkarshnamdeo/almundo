import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class HomeService {

  constructor (private http: HttpClient) { }

  getAll(reqObj: any) {
    return this.http.get(`${environment.serverUrl}/hotels`, { params: reqObj });
  }
}
