import { KeyService } from './key.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Key } from './entity/key';
import { KeyController } from './key.controller';
import { User } from 'src/user/entity/user';

@Module({
  imports: [TypeOrmModule.forFeature([Key, User])],
  controllers: [KeyController],
  providers: [KeyService],
})
export class KeyModule {}
