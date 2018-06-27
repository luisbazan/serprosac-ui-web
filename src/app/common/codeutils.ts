import { Code } from "../models/code";
import { CodeType } from "../enums/code-type.enum";

export class CodeUtils {

    public static getCodeByType(group:string, type:CodeType):(Code[]) {
        let data:Code[];
        data = CodeFactory.instance(type).getCodeModule(group);
        return data;
    }

    public static getCodeByTypeAndCode(group:string, type:CodeType, code):(Code) {
        let data:Code[] = this.getCodeByType(group, type);
        let dataFind = data.find(item=>item.getCode()==code);
        return dataFind!=null? dataFind: null;
    }
}

export interface iCode {
    getCodeModule(type?:string):Code[];
}

export class CodeSex implements iCode {
    
    getCodeModule():Code[] {
        let data:Code[] = [];

        data.push(new Code("General","M","Masculino"));
        data.push(new Code("General","F","Femenino"));

        return data;
    }
}

export class CodeState implements iCode {
    
    getCodeModule(type:string):Code[] {
        let data:Code[] = [];

        data.push(new Code("General","A","Activo"));
        data.push(new Code("General","I","Inactivo"));        
        
        return data;
    }
}

export class CodeStatus implements iCode {
    
    getCodeModule(type:string):Code[] {
        let data:Code[] = [];

        data.push(new Code("Student","M","Matriculado"));
        data.push(new Code("Student","P","Pre-Inscrito"));

        data.push(new Code("Course","PI","Por iniciar"));
        data.push(new Code("Course","IN","Iniciado"));
        data.push(new Code("Course","TE","Terminado"));

        return data.filter(row=>row.getGroup() == type);
    }
}

export class CodeCategory implements iCode {
    
    getCodeModule(type:string):Code[] {
        let data:Code[] = [];

        data.push(new Code("Course","N","Nuevo"));
        data.push(new Code("Course","B","Best Seller"));
        data.push(new Code("Course","O","Antiguo"));

        data.push(new Code("Product","A","Accesorios"));
        data.push(new Code("Product","D","Documentos"));

        return data.filter(row=>row.getGroup() == type);
    }
}

export class CodeTypeG implements iCode {
    
    getCodeModule(type:string):Code[] {
        let data:Code[] = [];

        data.push(new Code("Course","V","Virtual"));
        data.push(new Code("Course","P","Presencial"));

        return data.filter(row=>row.getGroup() == type);
    }
}

export class CodeFactory {
    public static instance(type:CodeType):(iCode) {
        if(CodeType.SEX === type) {
            return new CodeSex();
        }
        if(CodeType.STATE === type) {
            return new CodeState();
        }
        if(CodeType.STATUS === type) {
            return new CodeStatus();
        }
        if(CodeType.TYPE === type) {
            return new CodeTypeG();
        }
        if(CodeType.CATEGORY === type) {
            return new CodeCategory();
        }
        return new CodeState();
    }
}

