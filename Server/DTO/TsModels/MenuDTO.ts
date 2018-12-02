
module Server.DTO {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class MenuDTO {
        
        // TEXT
        public text: string = null;
        // ICON
        public icon: string = null;
        // TAG
        public tag: string = null;
        // URL
        public url: string = null;
        // SUBMENUID
        public subMenuId: string = null;
        // SUBMENU
        public subMenu: MenuDTO[] = [];
        // HASPARAM
        public hasParam: boolean = false;
        // ID
        public id: number = 0;
        // ORDER
        public order: number = 0;
        // ISACTIVE
        public isActive: boolean = false;
    }  
}