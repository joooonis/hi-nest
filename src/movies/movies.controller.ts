import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from 'src/moives/entities/movie.entity';
import { MoivesService } from 'src/moives/moives.service';

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  constructor(private readonly moviesService: MoivesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search') // :id와 search가 겹치면 id로 인식하기 때문에 search를 위로 올려준다.
  search(@Query('year') searchingYear: string) {
    return `This will return movies after the year: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: Movie) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatetedMovie: movieId,
      ...updateData,
    };
  }
}
