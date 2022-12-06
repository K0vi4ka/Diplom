import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookiesParser from 'cookie-parser'

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookiesParser())
  await app.listen(PORT,() =>{console.log(`PORT ${PORT}`)});
  
}
bootstrap();
