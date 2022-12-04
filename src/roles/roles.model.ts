//import { BelongsToMany } from "sequelize";
import { Column, Table, DataType, Model, BelongsToMany } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { UserRoles } from "./user-roles.model";

interface RolesCreate{
  id: number;
  description: string;
}

@Table({tableName: "roles"})
export class Roles extends Model<Roles,RolesCreate>{
  @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true,allowNull: false})
  id:number;

  @Column({type: DataType.STRING, unique: true,allowNull: false})
  description: string;

  @BelongsToMany(() => User, ()=> UserRoles)
  users: User[];
}