import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

// 全局，後面不需要每次imports（共享）
@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // 配置模块在整个应用程序中是全局的
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
