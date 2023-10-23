import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../config/user.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/iuser.repository';

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
}
