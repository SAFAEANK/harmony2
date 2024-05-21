import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Utilisateur {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop({ required: true })
  mail: string;

  @Prop({ required: true })
  mdp: string;

  @Prop({ required: true })
  cin: string;

  @Prop({ required: true })
  adresse: string;

  @Prop({ required: true })
  departement: string;

  @Prop({ required: true })
  num_tel: string;
}
export const CatSchema = SchemaFactory.createForClass(Utilisateur);
