import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface UserAttributes {
  id_user?: number;
  name: string;
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<UserAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id_user: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
}
