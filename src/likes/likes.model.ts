import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Publication } from "src/publication/publication.model";
import { User } from "src/user/user.model";


interface CreateLikes{
  publicId: number;
  userId: number;
}

@Table({tableName:'likesForPublication'})
export class Likes extends Model<Likes,CreateLikes>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @ForeignKey(() => Publication)
  @Column({type:DataType.INTEGER,allowNull: false})
  publicId: number;

  @ForeignKey(() => User)
  @Column({type:DataType.INTEGER,allowNull: false})
  userId: number;

  @BelongsTo(()=>User)
  user:User 

  @BelongsTo(()=> Publication)
  publication:Publication

  

}