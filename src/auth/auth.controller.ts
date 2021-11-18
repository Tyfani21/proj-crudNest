import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse, LoginDto } from './dto/login.dto';
import AuthUser from './auth-user.decorator';
import { User } from '@prisma/client';
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @Get('me')
  me(@AuthUser() user: User) {
    return user;
  }
}
