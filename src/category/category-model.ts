import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";

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