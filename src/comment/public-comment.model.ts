import { Column, Table, Model, DataType, ForeignKey } from "sequelize-typescript";
import { Comment } from "./comment.model";
import {Publication} from "../publication/publication.model"

interface PublicCommentCreate{
  id: number;
  commentId: number;
  publicId: number;
}

@Table({tableName: "comments"})
export class PublicComment extends Model<PublicComment,PublicCommentCreate>{
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @ForeignKey(()=>Comment)
  @Column({type: DataType.INTEGER})
  commentId: number

  @ForeignKey(()=>Publication)
  @Column({type: DataType.INTEGER})
  publicId:number;
}
