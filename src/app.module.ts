import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
     ConfigModule.forRoot(), UtilisateurModule,
     MongooseModule.forRoot(process.env.MONGO_URI)
    ],
  
})
export class AppModule {}
