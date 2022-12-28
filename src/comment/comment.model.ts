import { Table, Column, Model, DataType, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Publication } from "src/publication/publication.model";
import { User } from "src/user/user.model";
import { PublicComment } from "./public-comment.model";

interface CreateComment{
  value: string;
  author: number;
}

@Table({tableName:'comment'})
export class Comment extends Model<Comment,CreateComment>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @Column({type:DataType.STRING})
  value: string;

  @ForeignKey(()=>User)
  @Column({type: DataType.STRING})
  author:string;

  @BelongsToMany(() => Publication, ()=> PublicComment)
  users: Publication[];

  @BelongsTo(()=> User)
  user:User;
}