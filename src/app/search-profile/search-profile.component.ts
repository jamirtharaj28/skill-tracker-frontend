import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mockprofiles } from '../mock-profiles';
import { Profile } from '../models/profile';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {

  searchPerformed = false;
  searchForm: FormGroup;
  profiles: Profile[] = mockprofiles;// Replace this mockprofiles with empty array when calling service
  skills = [
    { Id: 1, name: 'HTML-CSS-JAVASCRIPT' },
    { Id: 2, name: 'ANGULAR'},
    { Id: 3, name: 'REACT' },
    { Id: 4, name: 'SPRING' },
    { Id: 5, name: 'RESTFUL' },
    { Id: 6, name: 'HIBERNATE' },
    { Id: 7, name: 'GIT' },
    { Id: 8, name: 'DOCKER'},
    { Id: 9, name: 'JENKINS' },    
    { Id: 10, name: 'AWS' },    
    { Id: 11, name: 'SPOKEN'},    
    { Id: 12, name: 'COMMUNICATION' } ,    
    { Id: 13, name: 'APTITUDE' }
];

  constructor(
    private _formBuilder: FormBuilder,
    private _searchService: SearchService
  ) { 
    this.searchForm = _formBuilder.group({
      searchby: ['name', Validators.required],      
      searchvalue: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  search() {
    const payload = {
      "empId": this.searchForm.value.searchby == "id" ? this.searchForm.value.searchvalue :  "",
      "name": this.searchForm.value.searchby == "name" ? this.searchForm.value.searchvalue :  "",
      "skill": this.searchForm.value.searchby == "skill" ? this.searchForm.value.searchvalue :  "",
    }
    /// Mocking code to check the functionality. For Real Scenario the below searchService code will be called.
    if (payload.empId)
         this.profiles=mockprofiles.filter( Profile => Profile.empId === payload.empId);
    else if(payload.name)
          this.profiles=mockprofiles.filter( Profile => Profile.name === payload.name);
    else
       this.profiles=mockprofiles.filter( Profile=> Profile.skills.filter(UserSkill => UserSkill.name==payload.skill));

    this._searchService.search(payload).subscribe(
      res => {      
        
        this.profiles = res;
        this.searchPerformed = true;
      },
      err => {
        
      }
    );
  }

}
