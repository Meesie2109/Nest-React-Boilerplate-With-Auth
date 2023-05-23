import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, signUpDto } from '../dto';
import { ILoginResponse } from '../interfaces';
import { ICreateResponse } from '../interfaces';

@Controller('auth')
export class AuthContoller {
  constructor(private readonly authService: AuthService) {}

  // POST: /auth/signup
  @Post('signin')
  async signInAsync(@Body() dto: LoginDto): Promise<ILoginResponse> {
    const token = await this.authService.signIn(dto.email, dto.password);
    return {
      statusCode: 200,
      message: 'User signed in successfully',
      token: token,
    };
  }

  // POST: /auth/signup
  @Post('signup')
  async signUpAsync(@Body() dto: signUpDto): Promise<ICreateResponse> {
    await this.authService.signUp(dto.email, dto.name, dto.password);
    return {
      statusCode: 201,
      message: 'User signed up successfully',
    };
  }
}
