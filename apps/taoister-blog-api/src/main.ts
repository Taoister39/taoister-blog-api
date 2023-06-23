import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { CLIENT_API, CLIENT_API_DOCS } from '@libs/common/constants/path';
import { TransformInterceptor } from '@libs/common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from '@libs/common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置驗證器
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        // 根據ts自動轉換類型
        enableImplicitConversion: true,
      },
    }),
  );

  // 用Next.js的話，可以不需要跨域
  app.enableCors();

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const logger = new Logger();

  // 配置Swagger
  const options = new DocumentBuilder()
    .setTitle('Taoister Blog Api')
    .setDescription('乾坤道長的個人博客api文檔')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.CLIENT_PORT);

  logger.log(`Server is running at ${CLIENT_API}`, `LOOK AT ME ->->`);
  logger.log(
    `swagger api doc is running at ${CLIENT_API_DOCS}`,
    'LOOK AT ME ->->',
  );
}
bootstrap();
