import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Movie } from '@prisma/client';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMovieDto } from './dto/Create-movie.dto';
import { MoviesService } from './movies.service';
import { User } from '@prisma/client';
import AuthUser from 'src/auth/auth-user.decorator';
@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }
  @Get('find-one/:id')
  @UseGuards(AuthGuard('jwt'))
  findUnique(@Param('id') id: string): Promise<Movie> {
    return this.service.findUnique(id);
  }
  @Get('find-all-movie')
  @UseGuards(AuthGuard('jwt'))
  findMany(): Promise<Movie[]> {
    return this.service.findMany();
  }
  @Delete('delete-movie/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
  @Get('like/:id')
  @UseGuards(AuthGuard('jwt'))
  likeMovie(
    @AuthUser() user: User,
    @Param('id') movieId: string,
  ): Promise<User> {
    const userId = user.id;
    return this.service.likeMovie(userId, movieId);
  }
}
