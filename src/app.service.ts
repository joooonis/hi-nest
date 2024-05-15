import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 서비스 = 비즈니스 로직을 작성하는 곳
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): string {
    return 'Hi!';
  }
}
