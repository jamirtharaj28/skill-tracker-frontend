import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class SearchService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  search(payload: any): Observable<any> {
    const url= environment.searchUrl;
    const options = {};

    return this.httpClient.post(url, payload, options);
  }

  getSkills(){
    return [];
  }

}
