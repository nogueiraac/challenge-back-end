import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService:UserService
  ) {}

  @Post()
  createUser(@Body() userDto: UserDto) {
    console.log(userDto)
    return this.userService.createUser(userDto);
  }

}
