import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './enum/role.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.decorator';
//npm install @types/passport-jwt --save-dev//
//npm i @nestjs/passport passport @nestjs/jwt passport-jwt//
@Controller('user')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('register')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirm;
    return this.service.create(data, UserRole.USER);
  }
  @Post('create-admin')
  @Role(UserRole.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirm;
    return this.service.create(data, UserRole.ADMIN);
  }

  @Get('find/:id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  @Get('find-all')
  @UseGuards(AuthGuard('jwt'))
  findMany() {
    const user = this.service.findMany();
    return user;
  }
  @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
//npm run start:dev//
