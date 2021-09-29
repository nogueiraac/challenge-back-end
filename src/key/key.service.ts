import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Key } from './entity/key';
import { User } from '../user/entity/user';

@Injectable()
export class KeyService {
  constructor(
    @InjectRepository(Key) private readonly keyRepository: Repository<Key>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createKey(id: number, key:string[]) {
    const user = await this.userRepository.findOne({id})
    console.log(user)

    const qtdKeys = key.length

    if (user) {
       
      const chavesExistentes = await this.userRepository.findOne(id, {relations:['chaves']})

      const verifyQtdKeys = chavesExistentes.keys.map((a) => a)

      if ( qtdKeys <= 3 ) {
        if(verifyQtdKeys.length + qtdKeys <= 3) {
          const keys = key.map((value) => this.keyRepository.create({value, user}))
        
          return this.keyRepository.save(keys)
        } else {
          console.log("Quantidade maior que 3")
        }
        
        
      } else {
        console.log('Pode cadastrar apenas 3 chaves por cliente')
      }
    }else {
      throw new NotFoundException(`Usuário ID ${id} não encontrado`);
    }
  }
}
