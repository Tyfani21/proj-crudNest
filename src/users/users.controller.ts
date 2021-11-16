import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './enum/role.enum';

@Controller()
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('create-user')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirm;
    return this.service.create(data, UserRole.USER);
  }
  @Post('create-admin')
  createAdmin(@Body() data: CreateUserDto): Promise<User> {
    delete data.passwordConfirm;
    return this.service.create(data, UserRole.ADMIN);
  }
}
//npm run start:dev//
