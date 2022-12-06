import { Column, Table, DataType, Model, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "src/user/user.model";

interface TokenCreate{
  id: number;
  userId:number;
  token: string;
}

@Table({tableName: "user_token"})
export class Token extends Model<Token,TokenCreate>{
  @Column({type:DataType.INTEGER, autoIncrement:true, allowNull:false, primaryKey:true})
  id:number;

  @ForeignKey(()=>User)
  @Column({type:DataType.INTEGER})
  userId:number;

  @Column({type:DataType.STRING})
  token:string;

  @BelongsTo(()=> User)
  user:User;
}