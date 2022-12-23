import { Column, Table, DataType, Model, BelongsToMany, ForeignKey, HasOne, BelongsTo } from "sequelize-typescript";
import { Category } from "src/category/category-model";
import { Comment } from "src/comment/comment.model";
import { PublicComment } from "src/comment/public-comment.model";
import { News } from "src/news/news.model";
import { User } from "src/user/user.model";

interface PublicationCreate{
  newsId: number;
  userId: number;
  categoryId: number;
}

@Table({tableName: 'publications'})
export class Publication extends Model<Publication,PublicationCreate>{

  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey:true, unique:true})
  id: number;

  @ForeignKey(()=>News)
  @Column({type:DataType.INTEGER})
  newsId:number;

  @ForeignKey(()=>User)
  @Column({type:DataType.INTEGER})
  usersId:number;

  @ForeignKey(()=>Category)
  @Column({type:DataType.INTEGER})
  categoryId:number;

  @Column({type: DataType.INTEGER, defaultValue: 0})
  views: number;

  @BelongsToMany(()=>Comment,()=>PublicComment)
  comments: Comment[];

  @BelongsTo(()=> User)
  user:User;

  @BelongsTo(()=>Category)
  category:Category;

  @BelongsTo(()=>News)
  news:News;
}
