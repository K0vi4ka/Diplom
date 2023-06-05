import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";

interface CreateUnconfirmUser {
  userId: number
  token: string;
}

@Table({tableName: 'unconfirmUser'})
export class UnconfirmUser extends Model<UnconfirmUser,CreateUnconfirmUser>{

  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey:true, unique:true})
  id: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER, unique: true, allowNull: false})
  userId: number

  @Column({type: DataType.STRING,unique: true, allowNull: false})
  token: string

  @BelongsTo(()=> User)
  user: User
}