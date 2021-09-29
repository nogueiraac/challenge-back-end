import { TransferModule } from './transfer/transfer.module';
import { TransferService } from './transfer/transfer.service';
import { TransferController } from './transfer/transfer.controller';
import { KeyModule } from './key/key.module';
import { KeyController } from './key/key.controller';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TransferModule,
    KeyModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      port: 5432,
      password: 'mydatabase',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
