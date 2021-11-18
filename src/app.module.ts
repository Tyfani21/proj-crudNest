import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [MoviesModule, AuthModule],
})
export class AppModule {}
