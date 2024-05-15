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

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search') // :id와 search가 겹치면 id로 인식하기 때문에 search를 위로 올려준다.
  search(@Query('year') searchingYear: string) {
    return `This will return movies after the year: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return {
      createdMovie: movieData,
    };
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatetedMovie: movieId,
      ...updateData,
    };
  }
}
