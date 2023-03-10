import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './album/album.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CancionModule } from './cancion/cancion.module';
import { GeneroModule } from './genero/genero.module';
import { InterpreteModule } from './interprete/interprete.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any | '',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/entities/*.js'],
      synchronize: true,
    }),
    InterpreteModule,
    GeneroModule,
    AlbumModule,
    CancionModule,
    UsuarioModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
