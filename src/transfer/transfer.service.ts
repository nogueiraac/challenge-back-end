import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user';
import { Repository } from 'typeorm';
import { Transfer } from './entity/transfer';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Transfer) private readonly transferRepository: Repository<Transfer>,
  ) {}

  async transferValue(idSend: User, idDestiny: User, value: number) {
    const userDestiny = idDestiny;
    const userSend = idSend;

    const user = this.transferRepository.create({ userSend, userDestiny, value });
    return this.transferRepository.save(user)

  }

}
