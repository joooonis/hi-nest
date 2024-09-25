import { Module } from '@nestjs/common';
import { MoivesService } from './moives/moives.service';
import { MoviesController } from './movies/movies.controller';

// 데코레이터 : 클래스를 위한 함수
@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 역할
  providers: [MoivesService],
})
export class AppModule {}
