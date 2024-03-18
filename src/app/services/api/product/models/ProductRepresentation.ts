import { RatingRepresentation } from "./RatingRepresntation";

export interface ProductRepresentation{
    id?: number ,
    title?: string,
    category?:string,
    description?:string,
    price?:number,
    image?:string,
    rating?:RatingRepresentation,
}