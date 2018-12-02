
module Server.DTO {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class ProductDTO {
        
        // ID
        public id: number = 0;
        // TITLE
        public title: string = null;
        // QUANTITY
        public quantity: number = 0;
        // CRITICALQUANTITY
        public criticalQuantity: number = 0;
        // PRICE
        public price: number = 0;
        // IMAGEURL
        public imageUrl: string = null;
        // DESCRIPTION
        public description: string = null;
        // USERNAME
        public userName: string = null;
        // ISEXIST
        public isExist: boolean = false;
        // UNIT
        public unit: string = null;
        // CREATEDATE
        public createDate: string = null;
        // UNITTYPE
        public unitType: UnitType = null;
    }  
}