import {Column, DataType, Model,Table, BelongsToMany, BelongsTo} from 'sequelize-typescript' 
import { Likes } from 'src/likes/likes.model';
import { Publication } from 'src/publication/publication.model';
import { Roles } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreate {
  nickname:string;
  email:string;
  password:string;
}

@Table({tableName: "users"})
export class User extends Model<User,UserCreate>{
  @Column({type:DataType.INTEGER,unique: true,autoIncrement: true, primaryKey: true, allowNull: false})
  id: number;

  @Column({type:DataType.STRING,unique: false})
  FIO: string;

  @Column({type:DataType.STRING,unique: true,allowNull: false})
  nickname: string;

  @Column({type:DataType.STRING,unique: true,allowNull: false})
  email: string;

  @Column({type:DataType.STRING,unique: true})
  phone: string;

  @Column({type:DataType.STRING,unique: false,allowNull: false})
  password: string;

  @BelongsToMany(() => Roles, ()=> UserRoles)
  roles: Roles[];

}