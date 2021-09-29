import { Body,
  Controller,
  Get,
  Param,
  Post, } from '@nestjs/common';
import { User } from 'src/user/entity/user';
import { TransferService } from './transfer.service';

@Controller('transfer')
export class TransferController {
  constructor(
    private readonly transferService: TransferService
  ) {}

  @Post(':idSend/:idDestiny')
  createTransfer(@Param('idSend') idSend: User, @Param('idDestiny') idDestiny: User, @Body('value') value: number) {
    return this.transferService.transferValue(idSend, idDestiny, value)
  }

}
