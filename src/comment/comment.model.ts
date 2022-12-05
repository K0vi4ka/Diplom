import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import { Publication } from "src/publication/publication.model";
import { PublicComment } from "./public-comment.model";

interface CreateComment{
  id: number;
  value: string;
  author: string;
}

@Table({tableName:'comment'})
export class Comment extends Model<Comment,CreateComment>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @Column({type:DataType.STRING})
  value: string;

  @Column({type: DataType.STRING})
  author:string;

  @BelongsToMany(() => Publication, ()=> PublicComment)
  users: Publication[];
}