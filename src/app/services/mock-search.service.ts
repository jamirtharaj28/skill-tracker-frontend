import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockprofiles } from '../Mock-Data/mock-profiles';
import { skills } from '../Mock-Data/Skills';

@Injectable()
export class MockSearchService {

  constructor() { }

  search(payload: any): Observable<any> {
    let result: any[] = [];
    if(payload.empId)
        result = mockprofiles.filter( i => i.empId == payload.empId);
    else if(payload.name)
        result = mockprofiles.filter( i => i.name?.toLowerCase() == payload.name?.toLowerCase());
    else if(payload.skill)
        mockprofiles.forEach( i => {
         if(i.skills.filter(k => k.name?.toLowerCase() == payload.skill?.toLowerCase() && k.proficiency > 10).length > 0)
            result.push(i);
        });

    return of(result);
  }

  getSkills(){
    return skills;
  }

}
