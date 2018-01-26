export class user {
    constructor(
        public name:string,
        public email:string,
        public pwd:string,
        public img?:string,
        public role?:string,
        public google?:boolean,
        public _id?:string
    ){}
}