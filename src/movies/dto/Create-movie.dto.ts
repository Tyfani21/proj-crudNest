import { IsString, Length, IsUrl, IsNotEmpty } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  @Length(2, 100)
  name: string;
  @IsString()
  year: string;
  @IsString()
  @IsNotEmpty()
  length: string;
  @IsString()
  @Length(10, 400)
  @IsNotEmpty()
  storyline: string;
  @IsUrl()
  image: string;
}
//npm run lint//
// npx prisma format//
//npx prisma generate//
