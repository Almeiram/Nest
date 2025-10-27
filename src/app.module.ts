import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './models/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      host: process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      synchronize: true, // solo para desarrollo
      models: [User],
    }),
    UsersModule,
  ],
})
export class AppModule {}
