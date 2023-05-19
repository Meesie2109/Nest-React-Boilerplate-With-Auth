import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { AuthContoller } from './auth/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
    }),
  ],
  controllers: [AuthContoller],
  providers: [AuthService, UserService],
  exports: [AuthService, UserService],
})
export class CoreModule {}
