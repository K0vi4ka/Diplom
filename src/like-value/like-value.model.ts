import { Table, Column, Model, DataType, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Likes } from "src/likes/likes.model";

interface CreateLikeValue{
  value: string;
}

@Table({tableName:'likeValue'})
export class LikeValue extends Model<LikeValue,CreateLikeValue>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @Column({type:DataType.STRING,allowNull: false})
  value:string;

  @BelongsToMany(()=>LikeValue,() => Likes)
  likes: LikeValue[]
}