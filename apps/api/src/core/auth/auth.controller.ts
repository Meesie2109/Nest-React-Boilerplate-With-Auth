import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, signUpDto } from '../dto';
import { ILoginResponse } from '../interfaces';
import { ICreateResponse } from '../interfaces';
import { Response } from 'express';
import { Cookies } from '../decoraters/cookies.decorater';

@Controller('auth')
export class AuthContoller {
  constructor(private readonly authService: AuthService) {}

  // POST: /auth/signup
  @Post('signin')
  @HttpCode(200)
  async signInAsync(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<ILoginResponse> {
    const token = await this.authService.signIn(dto.email, dto.password);

    response.cookie('token', token, { httpOnly: true });
    response.cookie('checkToken', true);
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

  // GET: /auth/validate
  @Get('validate')
  @HttpCode(200)
  async validateTokenAsync(
    @Cookies('token') token: string,
  ): Promise<ICreateResponse> {
    await this.authService.validateToken(token);
    return {
      statusCode: 200,
      message: 'Token is valid',
    };
  }

  // GET: /auth/signout
  @Get('signout')
  @HttpCode(200)
  async signOutAsync(@Res({ passthrough: true }) response: Response) {
    response.cookie('token', '', {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 1000),
    });
    response.cookie('checkToken', false);
    return {
      statusCode: 200,
      message: 'User signed out successfully',
    };
  }
}
