import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  // Function to sign a token
  async signToken(
    userId: number,
    username: string,
    role: number,
  ): Promise<string> {
    const payload = { sub: userId, username: username, role: role };

    return await this.jwtService.signAsync(payload);
  }

  // Function to sign in as a user
  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userService.findOne(email);

    if (user) {
      const passwordMatch = await compare(password, user.password);
      if (passwordMatch) {
        return await this.signToken(user.id, user.email, user.role);
      }
    }
    throw new BadRequestException('Invalid credentials');
  }

  // Function to sign up as a user
  async signUp(email: string, name: string, password: string): Promise<User> {
    const user = await this.userService.findOne(email);

    if (!user) {
      return await this.userService.createUserAsync(email, name, password);
    }
    throw new ConflictException('User already exists');
  }
}
