import { ICat } from "./ICat";

export default class CatModel {
    private breedName='';
    private origin='';
    private affectionLevel=0;
    private inteligence=0;
    private imageUrl='';
    constructor( 
        breedName:string,
        origin:string,
        affectionLevel:number,
        inteligence:number,
        imageUrl:string,){
            this.breedName = breedName
            this.origin = origin
            this.affectionLevel = affectionLevel
            this.inteligence = inteligence
            this.imageUrl =  imageUrl
    }

    public getCat(): ICat {
        return {
            breedName: this.breedName,
            origin: this.origin,
            affectionLevel:this.affectionLevel,
            inteligence:this.inteligence,
            imageUrl: this.imageUrl,
        }
    }
}