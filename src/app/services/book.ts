import { Author } from "./author";
import { Review } from "./review";


export interface Book{
    _id?:string;

    isbn?:string;
    id:string;
    title:string;
    author:string;
    authorId:string;
    pages:number|string;
    rating:number|string;
    description:string;
    tagList:string[],
    tags:string;
    cover?:string;
    coverUrl?:string;
    price:number;
    votes?:string|number;
    series?:string;
    seriesIndex?:string|number;
    reviews?:Review[];
    

}