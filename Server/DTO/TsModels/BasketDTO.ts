
module Server.DTO {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class BasketDTO {
        
        // BASKETID
        public basketId: string = "00000000-0000-0000-0000-000000000000";
        // CUSTOMERNAME
        public customerName: string = null;
        // EMPLOYEENAME
        public employeeName: string = null;
        // TOTALPRICE
        public totalPrice: number = 0;
        // CREATEDATE
        public createDate: string = null;
        // STATUSDATETIME
        public statusDateTime: string = null;
        // STATUS
        public status: BasketStatus = null;
    }
    export class BasketDetailDTO {
        
        // TITLE
        public title: string = null;
        // QUANTITY
        public quantity: number = 0;
        // UNITPRICE
        public unitPrice: number = 0;
        // UNIT
        public unit: string = null;
        // TOTALPRICE
        public totalPrice: number = 0;
    }  
}