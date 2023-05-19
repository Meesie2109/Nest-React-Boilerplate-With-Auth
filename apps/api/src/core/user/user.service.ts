import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../modules/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  // Functiom to find a user by email
  async findOne(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  // Function to create a user with hashed password
  async createUserAsync(email: string, password: string) {
    const hashedPassword = await hash(password, 10);
    return await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }
}
