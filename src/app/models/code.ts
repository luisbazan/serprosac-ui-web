export class Code {
  private group:string;
  private code;
  private descripcion:string;
  private relatedTo:string;

  constructor(group:string, code, descripcion:string, relatedTo:string="") { 
    this.group = group;
    this.code = code;
    this.descripcion = descripcion;
    this.relatedTo = relatedTo;
  }

  public getGroup() {
    return this.group;
  }

  public getCode() {
    return this.code;
  }

  public setCode(code:string):void {
    this.code = code;
  }

  public getDescription():string {
    return this.descripcion;
  }

  public setDescription(description:string):void {
    this.descripcion = description;
  }

  public getRelatedTo():string {
    return this.relatedTo;
  }
 }
