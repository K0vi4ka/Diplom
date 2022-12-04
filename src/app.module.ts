import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize"
import { UserModule } from './user/user.module';
import {ConfigModule} from  "@nestjs/config"
import {User} from './user/user.model'
import { RolesModule } from './roles/roles.module';
import SQLite from 'sqlite3'
import { Roles } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { NewsModule } from './news/news.module';
import { PublicationModule } from './publication/publication.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';


@Module({
  controllers: [CategoryController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User,Roles,UserRoles],
      autoLoadModels: true,
    }),
    UserModule,
    RolesModule,
    NewsModule,
    PublicationModule,
    CategoryModule,
    CommentModule,
  ],
})
export class AppModule{}