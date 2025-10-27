import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getAll() {
    return await this.userModel.findAll();
  }

  async getOne(id: number) {
    return await this.userModel.findByPk(id);
  }

  async create(user: Partial<User>) {
    const newUser = await this.userModel.create(User);
    return { message: 'User created successfully', user: newUser };
  }

  async update(id: number, data: Partial<User>) {
    const user = await this.userModel.findByPk(id);
    if (!user) return null;
    await user.update(data);
    return user;
  }

  async remove(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return { deleted: true };
  }
}