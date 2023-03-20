import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize"
import { UserModule } from './user/user.module';
import {ConfigModule} from  "@nestjs/config"
import {User} from './user/user.model'
import { RolesModule } from './roles/roles.module';
import { Roles } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { NewsModule } from './news/news.module';
import { PublicationModule } from './publication/publication.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { Publication } from "./publication/publication.model";
import { Category } from "./category/category-model";
import { News } from "./news/news.model";
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { CommentModule } from './comment/comment.module';
import { PublicComment } from "./comment/public-comment.model";
import { Comment } from "./comment/comment.model";
import { LikesService } from './likes/likes.service';
import { LikesModule } from './likes/likes.module';
import { LikeValueService } from './like-value/like-value.service';
import { LikeValueModule } from './like-value/like-value.module';
import { Likes } from "./likes/likes.model";
import { LikeValue } from "./like-value/like-value.model";



@Module({
  controllers: [],
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
      models: [User,Roles,UserRoles,Publication,Category,News,Comment,PublicComment,Likes,LikeValue],
      autoLoadModels: true,
    }),
    UserModule,
    RolesModule,
    NewsModule,
    PublicationModule,
    CategoryModule,
    AuthModule,
    TokenModule,
    LikesModule,
    LikeValueModule,
  ],
})
export class AppModule{}