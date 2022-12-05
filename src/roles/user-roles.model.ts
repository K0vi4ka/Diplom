import { Column, Table, Model, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { Roles } from "./roles.model";

interface RolesCreate {
  id: number;
  userId: number;
  rolesId: number;
}

@Table({tableName: "user-roles", createdAt:false, updatedAt: false})
export class UserRoles extends Model<UserRoles,RolesCreate>{
  @Column({type: DataType.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true})
  id: number

  @ForeignKey(()=>User)
  @Column({type: DataType.INTEGER})
  userId: number

  @ForeignKey(()=>Roles)
  @Column({type: DataType.INTEGER})
  rolesId:number;
}