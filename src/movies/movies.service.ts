import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Movie, Prisma } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private db: PrismaService) {}
  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    const movie = await this.db.movie.create({ data });
    return movie;
  }
  async findUnique(id: string) {
    const movie = await this.db.movie.findUnique({
      where: { id },
    });
    if (!movie) {
      throw new NotFoundException('Filme não encontrado');
    }
    return movie;
  }

  async findMany() {
    const movie = await this.db.movie.findMany();
    return movie;
  }
  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.movie.delete({
      where: { id },
    });
    return {
      message: 'item deletado com sucesso',
    };
  }
}
