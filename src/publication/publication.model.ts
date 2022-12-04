import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";

interface PublicationCreate{
  id: number;
  vies:number;
}


@Table
export class Publication extends Model<Publication,PublicationCreate>{

}
