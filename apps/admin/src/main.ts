import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ADMIN_API, ADMIN_API_DOCS } from '@libs/common/constants/path';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

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

  app.enableCors();
  await app.listen(process.env.ADMIN_PORT);

  logger.log(`Server is running at ${ADMIN_API}`, `LOOK AT ME ->->`);
  logger.log(
    `swagger api doc is running at ${ADMIN_API_DOCS}`,
    'LOOK AT ME ->->',
  );
}
bootstrap();
