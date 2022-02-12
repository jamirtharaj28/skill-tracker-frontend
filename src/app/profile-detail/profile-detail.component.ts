import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserSkill } from '../models/user-skill';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profile?: Profile;

  constructor() { }

  ngOnInit(): void {
  }

  getSkills(isTechnical: boolean): UserSkill[] {
     return  this.profile ? this.profile.skills.filter(s => s.isTechnical === isTechnical) : [];
  }

}
