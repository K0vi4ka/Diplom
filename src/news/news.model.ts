import { Model,Table, Column, DataType  } from "sequelize-typescript";

interface NewsCreate{
  id: number;
  filePath: string;
}

@Table({tableName: "news"})
export class News extends Model<News,NewsCreate> {

  @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true,autoIncrement: true})
  id: number;

  @Column({type: DataType.STRING})
  filePath: string;
}