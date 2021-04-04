import { User } from "./users-types";

export class Repo {
    constructor(public name: string, public description: string, 
        public stars: number, public openIssues: number, public watchers: number, public owner: User){}
}