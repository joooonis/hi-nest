import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터 : 클래스를 위한 함수
@Module({
  imports: [],
  controllers: [AppController], // url을 가져오고 함수를 실행하는 역할
  providers: [AppService],
})
export class AppModule {}
