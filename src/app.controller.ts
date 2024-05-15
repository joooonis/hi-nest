import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // express의 라우터 역할
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // 데코레이터랑 함수는 붙여서 작성해야함
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi') // url을 등록하고 함수를 매핑
  sayHello(): string {
    return this.appService.getHi();
  }
}
