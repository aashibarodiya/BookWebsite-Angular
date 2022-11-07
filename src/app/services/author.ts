export interface Social{
    id:number;
    webSite?:string|null;
    email?:string|null;
}

export interface AuthorSummary{
    _id?:string;
    id:string;
    name:string;
    photoUrl:string;
    tagList:string[];
    biography?:string;
}
export interface Author extends AuthorSummary{
    tags:string;
    birthDate:string;
    deathDate?:string|null;
    social:Social;
    books?:any[];
    lazyLoader?:any;
}