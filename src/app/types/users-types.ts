export class User {
    constructor(public login:string, public avatar_url: string){}
}
  
export interface SearchResponse {
    items: User[]
}