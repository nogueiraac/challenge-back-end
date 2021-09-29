import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDto: UserDto) {
    const name = userDto
      const createdUsers = await this.userRepository.findOne(name)

      if(createdUsers) {        
        throw new ConflictException("Usuário já existente")
      }
      if(!createdUsers){
        const user = this.userRepository.create(userDto);
  
        return this.userRepository.save(user)
      }
  }
}
