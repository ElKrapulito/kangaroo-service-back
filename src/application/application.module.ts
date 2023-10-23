import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CommandHandlers } from './commands';
import { DomainModule } from 'src/domain/domain.module';
import { AuthModule } from '../utils/auth/auth.module';

@Module({
  imports: [CqrsModule, InfrastructureModule, DomainModule, AuthModule],
  providers: [...CommandHandlers],
  exports: [...CommandHandlers],
})
export class ApplicationModule {}
