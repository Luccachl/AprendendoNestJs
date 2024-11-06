import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FichaModule } from './ficha/ficha.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Ficha } from './ficha/entities/ficha.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: ':memory:',  // Usando o banco em memória ou um arquivo .db
      entities: [User, Ficha],  // Entidades
      synchronize: true,   // Criação de tabelas automatica com base nas entidades
      logging: true, // Para ver os logs de SQL no console
      }),
    UsersModule,
    FichaModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
