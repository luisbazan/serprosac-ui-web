export class Location {
  
  constructor(public cod_dep_inei:string,
    public cod_dep_reniec:string,
    public cod_dep_sunat:string,
    public cod_prov_inei:string,
    public cod_prov_reniec:string,
    public cod_prov_sunat:string,
    public cod_ubigeo_inei:string,
    public cod_ubigeo_reniec:string,
    public cod_ubigeo_sunat:string,
    public desc_dep_inei:string,
    public desc_dep_reniec:string,
    public desc_dep_sunat:string,
    public desc_prov_inei:string,
    public desc_prov_reniec:string,
    public desc_prov_sunat:string,
    public desc_ubigeo_inei:string,
    public desc_ubigeo_reniec:string,
    public desc_ubigeo_sunat:string
    ) { 
  }

  public getSummaryDescription():String {
    return this.fixDataUbigeo(this.desc_ubigeo_inei) + " " + this.desc_prov_inei + " " + this.desc_dep_inei;
  }

  public getSummaryDescriptionHTML():String {
    return this.fixDataUbigeo(this.desc_ubigeo_inei) + " <b>" + this.desc_prov_inei + "</b> " + this.desc_dep_inei;
  }

  private fixDataUbigeo(data:string):string {
    if(data == "LURIGANCHO") {
      this.desc_ubigeo_inei = "CHOSICA (LURIGANCHO)";
      return this.desc_ubigeo_inei;
    }
    if(data == "RUPA-RUPA") {
      this.desc_ubigeo_inei = "TINGO MARIA (RUPA-RUPA)";
      return this.desc_ubigeo_inei;
    }
    
    return data;
  }
 }
