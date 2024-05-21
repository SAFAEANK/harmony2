import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilisateurService {
    Add(){
        return 'add action';
    }
    Findall(){
        return 'find all page';
    }
    FindOne(){
        return 'find one page';
    }
    Update(){
        return 'update page';
    }
    Delete(){
        return 'delete page';
    }
    Search(){
     return 'search page';   
    }
}
