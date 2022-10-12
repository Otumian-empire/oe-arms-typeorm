import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { USERNAME_LENGTH } from "../../constants/app.constants";

@Entity()
export default class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, length: USERNAME_LENGTH })
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;
}
