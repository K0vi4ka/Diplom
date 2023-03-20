import { Table, Column, Model, DataType, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { LikeValue } from "src/like-value/like-value.model";
import { Publication } from "src/publication/publication.model";


interface CreateLikes{
  publicId: number;
  likeValue: number;
}

@Table({tableName:'likesForPublication'})
export class Likes extends Model<Likes,CreateLikes>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @ForeignKey(() => Publication)
  @Column({type:DataType.INTEGER,allowNull: false})
  publicId: number;

  @ForeignKey(() => LikeValue)
  @Column({type:DataType.INTEGER,allowNull: false})
  likeValue: number;

  

}