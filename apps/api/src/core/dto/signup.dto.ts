import { IsNotEmpty, IsString } from 'class-validator';

export class signUpDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
