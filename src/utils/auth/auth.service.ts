import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from '../../domain/repositories/iuser.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject(IUserRepository) private userRepo: IUserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(req: any) {
    const payload = { email: req.user.email, id: req.user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
