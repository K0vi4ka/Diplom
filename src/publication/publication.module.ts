import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from './publication.model';

@Module({
  providers: [PublicationService],
  controllers: [PublicationController],

  imports: [
    SequelizeModule.forFeature([Publication])
  ]
})
export class PublicationModule {}
