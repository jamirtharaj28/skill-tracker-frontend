import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  skills: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _searchService: SearchService
  ) {
    this.searchForm = _formBuilder.group({
      searchby: ['name', Validators.required],
      searchvalue: ['', Validators.required]
    });
    this.skills = this._searchService.getSkills();
  }

  ngOnInit(): void {
  }

  onSearchOptionChange(){
    this.searchPerformed = false;
    this.searchForm.patchValue({searchvalue : ''});
      if(this.searchForm.value.searchby == 'skill'){
        this.searchForm.patchValue({searchvalue: this.skills[0].name });
      }
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
        console.log(err);
      }
    );
  }
}
