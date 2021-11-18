import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/Create-movie.dto';
import { MoviesService } from './movies.service';
@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Post('create')
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }
  @Get('find-one/:id')
  findUnique(@Param('id') id: string): Promise<Movie> {
    return this.service.findUnique(id);
  }
  @Get('find-all-movie')
  findMany(): Promise<Movie[]> {
    return this.service.findMany();
  }
  @Delete('delete-movie/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
