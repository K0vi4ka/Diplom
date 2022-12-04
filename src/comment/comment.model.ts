import { Table, Column, Model, DataType } from "sequelize-typescript";

interface CreateComment{
  id: number;
  value: string;
}

@Table
export class Comment extends Model<Comment,CreateComment>{
  @Column({type:DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @Column({type:DataType.STRING})
  value: string;
}