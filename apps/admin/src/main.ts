import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ADMIN_API, ADMIN_API_DOCS } from '@libs/common/constants/path';
import { TransformInterceptor } from '@libs/common/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        // 查詢參數可以轉換成數字，根據ts類型
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalInterceptors(new TransformInterceptor());

  const logger = new Logger();

  // 配置Swagger
  const options = new DocumentBuilder()
    .setTitle('Taoister Blog Api')
    .setDescription('乾坤道長的個人博客api文檔')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  });
  await app.listen(process.env.ADMIN_PORT);

  logger.log(`Server is running at ${ADMIN_API}`, `LOOK AT ME ->->`);
  logger.log(
    `swagger api doc is running at ${ADMIN_API_DOCS}`,
    'LOOK AT ME ->->',
  );
}
bootstrap();
