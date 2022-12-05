import { Column, Table, DataType, Model, BelongsToMany, BelongsTo } from "sequelize-typescript";
import { Publication } from "src/publication/publication.model";
import { User } from "src/user/user.model";

interface CreateCategory{
  id: number;
  value: string;
}

@Table({tableName: "category"})
export class Category extends Model<Category,CreateCategory>{

  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true})
  value: string;

}