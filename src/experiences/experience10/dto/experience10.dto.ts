import { IsEmail, IsNotEmpty } from 'class-validator';

export class Experience10Dto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsEmail()
  email: string;
}
