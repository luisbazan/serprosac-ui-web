import { CodeModule } from "../models/code/code.module";
import { CodeType } from "../enums/code-type.enum";

export class CodeUtils {

    public static getCodeByType(group:string, type:CodeType):(CodeModule[]) {
        let data:CodeModule[];
        data = CodeFactory.instance(type).getCodeModule(group);
        return data;
    }

    public static getCodeByTypeAndCode(group:string, type:CodeType, code):(CodeModule) {
        let data:CodeModule[] = this.getCodeByType(group, type);
        let dataFind = data.find(item=>item.getCode()==code);
        return dataFind!=null? dataFind: null;
    }
}

export interface iCode {
    getCodeModule(type?:string):CodeModule[];
}

export class CodeSex implements iCode {
    
    getCodeModule():CodeModule[] {
        let data:CodeModule[] = [];

        data.push(new CodeModule("General","M","Masculino"));
        data.push(new CodeModule("General","F","Femenino"));

        return data;
    }
}

export class CodeState implements iCode {
    
    getCodeModule(type:string):CodeModule[] {
        let data:CodeModule[] = [];

        data.push(new CodeModule("General","A","Activo"));
        data.push(new CodeModule("General","I","Inactivo"));        
        
        return data;
    }
}

export class CodeStatus implements iCode {
    
    getCodeModule(type:string):CodeModule[] {
        let data:CodeModule[] = [];

        data.push(new CodeModule("Student","M","Matriculado"));
        data.push(new CodeModule("Student","P","Pre-Inscrito"));

        data.push(new CodeModule("Course","PI","Por iniciar"));
        data.push(new CodeModule("Course","IN","Iniciado"));
        data.push(new CodeModule("Course","TE","Terminado"));

        return data.filter(row=>row.getGroup() == type);
    }
}

export class CodeCategory implements iCode {
    
    getCodeModule(type:string):CodeModule[] {
        let data:CodeModule[] = [];

        data.push(new CodeModule("Course","N","Nuevo"));
        data.push(new CodeModule("Course","B","Best Seller"));
        data.push(new CodeModule("Course","O","Antiguo"));

        data.push(new CodeModule("Product","A","Accesorios"));
        data.push(new CodeModule("Product","D","Documentos"));

        return data.filter(row=>row.getGroup() == type);
    }
}

export class CodeTypeG implements iCode {
    
    getCodeModule(type:string):CodeModule[] {
        let data:CodeModule[] = [];

        data.push(new CodeModule("Course","V","Virtual"));
        data.push(new CodeModule("Course","P","Presencial"));

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

