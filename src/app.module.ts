import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import Config from './config/keys';


@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot(Config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}