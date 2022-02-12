import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profile } from '../models/profile';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  search(payload: any): Observable<any> {
    const url= environment.searchUrl;
    const options = {};

    return this.httpClient.post(url, payload, options);
  }
}
