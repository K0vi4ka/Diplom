import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookiesParser from 'cookie-parser'
import { urlencoded, json } from 'express';
const ErrorMidleWare = require('./midlware/error-midleware')


async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(ErrorMidleWare)
  await app.listen(PORT,() =>{console.log(`PORT ${PORT}`)});
  
}
bootstrap();
