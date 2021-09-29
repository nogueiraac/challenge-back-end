import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { Transfer } from './entity/transfer';
import { TransferService } from './transfer.service';
import { User } from 'src/user/entity/user';

@Module({
    imports: [TypeOrmModule.forFeature([Transfer, User])],
    controllers: [TransferController],
    providers: [TransferService],
})
export class TransferModule {}
