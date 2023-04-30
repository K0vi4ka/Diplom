import { Column, Table, DataType, Model, ForeignKey,BelongsTo } from "sequelize-typescript";


interface CreateLinkeSource{
  id: number;
  source: string;
}

@Table({tableName: "linkeSource"})
export class LinkeSource extends Model<LinkeSource,CreateLinkeSource>{

  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true})
  source: string;
  
}