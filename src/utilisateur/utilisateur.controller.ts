import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(private readonly service: UtilisateurService){}
@Post()
Add(){
    return this.service.Add();
}
@Get()
FindAll(){
    return this.service.Findall();
}
@Get('/:id')
FindOne(@Param('id') id: string){
    return this.service.FindOne();
}
@Put('/:id')
Update(@Param('id') id: string){
    return this.service.Update();
}
@Delete('/:id')
Delete(@Param('id') id: string){
    return this.service.Delete();
}
@Post('/search')
Search(@Query('key') key){
    return key;
}


}
