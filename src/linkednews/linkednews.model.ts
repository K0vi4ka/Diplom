import { Column, Table, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Category } from "src/category/category-model";
import { LinkeSource } from "src/linkesource/linkesource-model";


interface CreateLinkedNews{
  id: number;
  title: string;
  source: number;
  link: string;
  categoryId: number;
  date: Date;
}

@Table({tableName: "linkedNews"})
export class LinkdedNews extends Model<LinkdedNews,CreateLinkedNews>{

  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true})
  title: string;

  @ForeignKey(() => LinkeSource)
  @Column({type: DataType.INTEGER, unique: true})
  source: number;

  @Column({type: DataType.STRING(500,true), unique: true})
  link: string;

  @ForeignKey(() => Category)
  @Column({type: DataType.INTEGER})
  categoryId: number;

  @Column({type:DataType.DATE})
  date: Date;

  @BelongsTo(() => LinkeSource)
  linkeSource: LinkeSource

  @BelongsTo(() => Category)
  category: Category;
}