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
  profiles: Profile[] = [];
  skills = [
    {    id: 0,    name: ''  },
    {    id: 1,    name: 'Angular'  },
    {    id: 2,    name: 'React'  },
    {    id: 3,    name: 'Java'  },
    {    id: 4,    name: '.NET'  },
    {    id: 5,    name: 'Vue'  },
    {    id: 6,    name: 'MongoDB'  },
    {    id: 7,    name: 'Node'  },
    {    id: 8,    name: 'Javascript'  },
    {    id: 51,    name: 'Communication'  },
    {    id: 52,    name: 'Domain Skills'  },
    {    id: 53,    name: 'Leadership'  },,
    {    id: 54,    name: 'Critical Thinking'  },
    {    id: 55,    name: 'Problem Solving'  },
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
