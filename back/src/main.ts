import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.setGlobalPrefix('api');
  await app.listen(port | 7000, () =>
    console.log(`App started ${port || 7000} port`)
  );
}

bootstrap();
