import {
  Body,
  Controller,
  Post,
  Param
} from '@nestjs/common';
import { KeyService } from './key.service';

@Controller()
export class KeyController {
  constructor(
    private readonly keyService:KeyService
  ) {}

  @Post(':id')
  createKey(@Param('id') id: number, @Body('keys') keys: string[]) {
    return this.keyService.createKey(id, keys)
  }

}
