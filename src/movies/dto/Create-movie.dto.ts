import { IsString, Length, IsDate, IsUrl, IsNotEmpty } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  @Length(2, 100)
  name: string;
  @IsDate()
  year: Date;
  @IsDate()
  @IsNotEmpty()
  length: Date;
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
