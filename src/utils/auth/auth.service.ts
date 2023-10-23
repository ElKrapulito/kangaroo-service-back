import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAbstract } from '../../domain/model-abstracts/user.abstract';
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

  async login(user: UserAbstract) {
    const payload = { email: user.email, id: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
