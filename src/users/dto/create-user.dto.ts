import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  name: string;
  @IsString()
  @Length(5, 20)
  @IsEmail({}, { message: 'Informe um email válido' })
  email: string;
  @IsString({ message: 'Informe uma senha válida' })
  @Length(5, 20)
  password: string;
  @IsString({ message: 'Sua senha não confere' })
  @Length(5, 20)
  passwordConfirm: string;
}
