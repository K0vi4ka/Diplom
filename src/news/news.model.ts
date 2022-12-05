import { Model,Table, Column, DataType,BelongsTo} from "sequelize-typescript";
import { Publication } from "src/publication/publication.model";

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