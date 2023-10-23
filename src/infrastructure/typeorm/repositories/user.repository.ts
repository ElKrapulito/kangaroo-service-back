import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../config/user.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/iuser.repository';
import { UserAbstract } from '../../../domain/model-abstracts/user.abstract';

@Injectable()
export class UserRepository
  extends BaseRepositoryTypeOrm<UserEntity>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {
    super(userRepo);
  }

  findByEmail(email: string): Promise<UserAbstract> {
    return this.userRepo.findOne({ where: { email } });
  }
}
