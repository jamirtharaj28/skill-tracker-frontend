import { UserSkill } from "./user-skill";

export interface Profile {
    name: string;
    email: string;
    empId: string;
    mobile: string
    skills: UserSkill[]
}
