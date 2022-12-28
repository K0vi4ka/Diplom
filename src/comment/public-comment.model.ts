import { Column, Table, Model, DataType, ForeignKey, BelongsToMany, HasMany, BelongsTo } from "sequelize-typescript";
import { Comment } from "./comment.model";
import {Publication} from "../publication/publication.model"
import { User } from "src/user/user.model";

interface CreatePublicationComment{
  commentId: number;
  publicId: number;
}

@Table({tableName: "comments"})
export class PublicComment extends Model<PublicComment,CreatePublicationComment>{
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @ForeignKey(()=>Comment)
  @Column({type: DataType.INTEGER})
  commentId: number

  @ForeignKey(()=>Publication)
  @Column({type: DataType.INTEGER})
  publicId:number;

  @BelongsTo(() => Publication)
  publication: Publication
}
